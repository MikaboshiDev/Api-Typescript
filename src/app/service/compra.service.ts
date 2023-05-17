import { buy } from '../interfaces/compra.interface';
import ItemModel from '../models/compra.model';

// Crea un item en la base de datos a nombre del usuario
const insertCompra = async (user: string, item: buy) => {
     const itemCreate = await ItemModel.create({
          usuario: user,
          premium: item.premium,
          partner: item.partner,
          compra: {
               nombre: item.compra.nombre,
               precio: item.compra.precio,
               descuento: item.compra.descuento,
               categoria: item.compra.categoria,
               fecha: item.compra.fecha,
          },
     });

     return itemCreate;
};

const getCompra = async (user: string, id: string) => {
     const item = await ItemModel.findOne({ usuario: user, _id: id });
     if (!item) return 'ITEM_NOT_FOUND';
     return item;
};

const getCompras = async (user: string) => {
     const items = await ItemModel.find({ usuario: user });
     if (!items) return 'USER_NOT_EXIST';
     return items;
};

const updateCompra = async (user: string, id: string, data: buy) => {
     const itemUpdate = await ItemModel.findOneAndUpdate(
          { usuario: user, _id: id },
          data,
          {
               new: true,
          }
     );
     if (!itemUpdate) return 'ITEM_NOT_FOUND';
     return itemUpdate;
};

const deleteCompra = async (user: string, id: string) => {
     const itemDelete = await ItemModel.findOneAndDelete({ usuario: user, _id: id });
     if (!itemDelete) return 'ITEM_NOT_FOUND';
     return itemDelete;
};

export { insertCompra, getCompra, getCompras, updateCompra, deleteCompra };
