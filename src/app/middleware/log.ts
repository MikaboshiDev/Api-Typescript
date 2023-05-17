import { NextFunction, Request, Response } from 'express';
const logMiddleware = async (req: Request, res: Response, next: NextFunction) => {
     const header = req.headers;
     const userAuth = header['user-agent'];
     const user = req.params.user;
     console.log(`User: ${user} - User-Agent: ${userAuth}`.magenta);
     next();
};

export { logMiddleware };
