import { emojisApiRouter } from './emojisApi/utils/emojisApiRouter';
import express from 'express';

export function apiV1Router(app: any): void {
    const router = express.Router();
    app.use('/api/v1', router);

    router.use('/emojis', emojisApiRouter());
}
