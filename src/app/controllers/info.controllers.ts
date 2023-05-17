import { Request, Response } from 'express';
import { getComiciones } from '../service/info.service';

const Comiciones = async (req: Request, res: Response) => {
     const response = await getComiciones();
     res.send(response);
};

export { Comiciones };
