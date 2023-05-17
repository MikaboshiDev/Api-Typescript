import { Request, Response } from 'express';
import { RequestExt } from '../interfaces/req-ext';
import { Storage } from '../interfaces/upload.interface';
import { registerUpload } from '../service/upload.service';
import { handlerHttp } from '../utils/error.handler';

const getFile = async (req: RequestExt, res: Response) => {
     try {
          const { user, file } = req;
          const dataToRegister: Storage = {
               fileName: `${file?.filename}`,
               idUser: `${user?.id}`,
               path: `${file?.path}`,
          };
          const response = await registerUpload(dataToRegister);
          res.send(response);
     } catch (e) {
          handlerHttp(res, 'ERROR_GET_BLOG');
     }
};

export { getFile };
