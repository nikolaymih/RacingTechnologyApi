import jwt from 'jsonwebtoken';
import config from 'config';

const publicKey = config.get<string>('publicKey');
const privateKey = config.get<string>('privateKey');

export const jwtSign = (
    object: Object,
    options?: jwt.SignOptions | undefined
) => {
    return jwt.sign(object, privateKey, {
        ...(options && options),
        algorithm: "RS256",
    });
}

export const jwtVerify = (token: string,) => {
    try {
        const decoded = jwt.verify(token, publicKey);
        return {
            valid: true,
            expired: false,
            decoded,
        };
    } catch (e: any) {
        console.error(e);
        return {
            valid: false,
            expired: e.message === "jwt expired",
            decoded: null,
        };
    }
}