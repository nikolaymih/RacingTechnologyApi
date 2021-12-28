import { Request, Response } from 'express';
import config from 'config';
import { createSession, getAllSessions, updateSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { jwtSign } from '../utils/jwt';

export const createUserSessionHandler = async (req: Request, res: Response) => {
    // Validate if there is such email and if the password is accurate
    const user = await validatePassword(req.body);

    if (!user) {
        return res.status(401).send('Invalid email or password');
    }

    // create sesssion
    const session = await createSession(user._id, req.get('user-agent') || '');

    // create access token
    const accessToken = jwtSign(
        { ...user, session: session._id },
        { expiresIn: config.get<string>('accessTokenExpiration') }
    )

    // create refresh token

    const refreshToken = jwtSign(
        { ...user, session: session._id },
        { expiresIn: config.get<string>('refreshTokenExpiration') }
    )

    // return access and refresh token to client either for localstorage or cookies
    res.cookie('accessToken', accessToken, {
        maxAge: 900000, // 15mins
        httpOnly: true,
        domain: 'localhost', //change domain on production
        path: '/',
        sameSite: 'strict',
        secure: false // set to true in production because in prod u need https
    })

    res.cookie('refreshToken', refreshToken, {
        maxAge: 3.154e10, // 1 year
        httpOnly: true,
        domain: 'localhost', //change domain on production
        path: '/',
        sameSite: 'strict',
        secure: false // set to true in production because in prod u need https
    })

    return res.send({ accessToken, refreshToken });
}

export const getUserSessionsHandler = async (req: Request, res: Response) => {
    const userId = res.locals.user._id;

    const sessions = await getAllSessions({ user: userId, valid: true });

    return res.send(sessions);
}

export const deleteSessionHandler = async (req: Request, res: Response) => {
    const session = res.locals.user.session;

    await updateSession({ _id: session }, { valid: false });

    return res.send({
        accessToken: null,
        refreshToken: null
    });
}