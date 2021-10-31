import express from 'express';
import config from 'config';
import logger from './utils/logger';
import connect from './utils/connect';
import routes from './routes';

const app = express();

const port = config.get<number>('port');

app.listen(port, async () => {
    logger.info(`App is listening on http://localhost:${port}`);

    await connect();

    routes(app);
})
