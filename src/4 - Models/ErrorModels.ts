export type ErrorType = {
    msg: string;
    status: number;
}


export const RouteNotFoundError = (route: string) => {
    const error: ErrorType = {msg: `Route  ${route} not exists`, status: 404}
    return error;
}

export const validationError = (msg: string) => {
    const error: ErrorType = {msg, status: 401}
    throw error;
}

