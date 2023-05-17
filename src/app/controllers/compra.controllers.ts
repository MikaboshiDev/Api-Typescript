import { Request, Response } from 'express';
import { handlerHttp } from '../utils/error.handler';
import {
     insertCompra,
     getCompra,
     getCompras,
     updateCompra,
     deleteCompra,
} from '../service/compra.service';

// Manda un solo dato
const getItem = async (req: Request, res: Response) => {
     try {
          const user = req.params.user;
          const id = req.params.id;
          const response = await getCompra(user, id);
          const data = response ? response : 'NOT_FOUND_EXIST_BUY';
          res.send(response);
     } catch (e) {
          handlerHttp(res, `ERROR_GET_BUY`);
     }
};

// Manda todos los datos
const getItems = async (req: Request, res: Response) => {
     try {
          const user = req.params.user;
          const response = await getCompras(user);
          res.send(response);
     } catch (e) {
          handlerHttp(res, `ERROR_GET_BUYS`);
     }
};

// Actualiza los datos
const updateItem = async (req: Request, res: Response) => {
     try {
          const user = req.params.user;
          const id = req.params.id;
          const { body } = req;

          const response = await updateCompra(user, id, body);
          res.send(response);
     } catch (e) {
          handlerHttp(res, `ERROR_UPDATE_BUY`);
     }
};

// Recibe los datos
const postItem = async (req: Request, res: Response) => {
     try {
          const user = req.params.user;
          const { body } = req;
          const response = await insertCompra(user, body);
          res.send(response);
     } catch (e) {
          handlerHttp(res, `ERROR_POST_BUY`);
     }
};

// Borra un dato
const deleteItem = (req: Request, res: Response) => {
     try {
          const user = req.params.user;
          const id = req.params.id;
          const response = deleteCompra(user, id);
          res.send(response);
     } catch (e) {
          handlerHttp(res, `ERROR_DELETE_BUY`);
     }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
