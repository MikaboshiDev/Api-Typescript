import { Response } from 'express';
import fs from 'fs';
const handlerHttp = (res: Response, error: string) => {
     res.status(500);
     res.send({ error });

     fs.appendFileSync(`${Date.now() - 1000}-error.log`, error);
};

export { handlerHttp };
