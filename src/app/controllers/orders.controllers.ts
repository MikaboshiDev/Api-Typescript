import { Request, Response } from 'express';
import {
     createLic,
     deleteLic,
     getAuths,
     getItem,
     getItems,
     getLics,
} from '../service/orders.service';
import { handlerHttp } from '../utils/error.handler';

const getOrder = async (req: Request, res: Response) => {
     try {
          const user = req.params.user;
          const response = await getItem(user);
          const data = response ? response : 'NOT_FOUND_ORDER';
          res.send(response);
     } catch (e) {
          handlerHttp(res, `ERROR_GET_ORDER`);
     }
};

const getOrders = async (req: Request, res: Response) => {
     try {
          const response = await getItems();
          res.send(response);
     } catch (e) {
          handlerHttp(res, `ERROR_GET_ORDERS`);
     }
};

const getLicenses = async (req: Request, res: Response) => {
     try {
          const response = await getLics();
          res.send(response);
     } catch (e) {
          handlerHttp(res, `ERROR_GET_LICENSES`);
     }
};

const createLicense = async (req: Request, res: Response) => {
     try {
          const user = req.params.user;
          const { body } = req;
          console.log(body);
          const response = await createLic(user, body);
          res.send(response);
     } catch (e) {
          handlerHttp(res, `ERROR_CREATE_LICENSE`);
     }
};

const deleteLicense = async (req: Request, res: Response) => {
     try {
          const user = req.params.user;
          const id = req.params.id;
          const response = await deleteLic(user, id);
          res.send(response);
     } catch (e) {
          handlerHttp(res, `ERROR_DELETE_LICENSE`);
     }
};

const authGet = async (req: Request, res: Response) => {
     try {
          const response = await getAuths();
          const auths = response ? response : 'NOT_FOUND_AUTHS';
          res.send(auths);
     } catch (e) {
          return 'ERROR_GET_AUTHS';
     }
};

const GetStatus = async (req: Request, res: Response) => {
     return res.send('OK');
};

export {
     getOrder,
     getOrders,
     getLicenses,
     createLicense,
     deleteLicense,
     authGet,
     GetStatus,
};
