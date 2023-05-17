import { Schema, Types, model, Model } from 'mongoose';
import { buy } from '../interfaces/compra.interface';
const ItemSchema = new Schema<buy>(
     {
          usuario: { type: String, required: true },
          premium: { type: Boolean, default: false },
          partner: { type: Boolean, default: false },
          compra: {
               nombre: { type: String, required: true },
               precio: { type: Number, required: true },
               descuento: { type: Boolean, default: false },
               categoria: { type: String, required: true },
               fecha: { type: Date, default: Date.now },
          },
     },
     {
          timestamps: true,
          versionKey: false,
     }
);

const ItemModel = model('compras', ItemSchema);
export default ItemModel;
