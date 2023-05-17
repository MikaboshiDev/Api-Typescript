import { license } from '../interfaces/orders.interface';
import UserModel from '../models/auth.model';
import ItemModel from '../models/compra.model';
import LicModel from '../models/orders.model';

const getItem = async (user: string) => {
     const items = await ItemModel.find({ usuario: user });
     return items;
};
const getItems = async () => {
     const items = await ItemModel.find();
     if (!items) return 'NOT_BUYS_EXIST';
     return items;
};
const getLics = async () => {
     const lics = await LicModel.find();
     if (!lics) return 'NOT_LICENSES_EXIST';
     return lics;
};
const createLic = async (user: string, item: license) => {
     const licCreate = await LicModel.create({
          usuario: user,
          licencia: {
               id: item.licencia.id,
               tipo: item.licencia.tipo,
          },
     });

     return licCreate;
};

const deleteLic = async (user: string, id: string) => {
     const licDelete = await LicModel.findOneAndDelete({ usuario: user, _id: id });
     if (!licDelete) return 'NOT_FOUND_EXIST';

     return licDelete;
};

const getAuths = async () => {
     try {
          const auths = await UserModel.find();
          if (!auths) return 'NOT_FOUND_AUTHS';

          return auths;
     } catch (e) {
          return 'ERROR_GET_AUTHS';
     }
};

export { getItem, getItems, getLics, createLic, deleteLic, getAuths };
