import { getEmojis } from '../getEmojis';
import express from 'express';

export function emojisApiRouter() {
    const router = express.Router();

    router.get('/getEmojis', getEmojis);

    return router;
}
