import { MessageResponse } from 'src/types/MessageResponse';

export type ErrorResponse = MessageResponse & {
    stack?: string;
};
