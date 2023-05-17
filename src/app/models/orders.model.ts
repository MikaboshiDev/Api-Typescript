import { Schema, Types, model, Model } from 'mongoose';
import { license } from '../interfaces/orders.interface';
const LicSchema = new Schema<license>(
     {
          usuario: { type: String, required: true },
          licencia: {
               id: { type: String, required: true, unique: true },
               tipo: { type: String, required: true },
          },
     },
     {
          timestamps: true,
          versionKey: false,
     }
);

const LicModel = model('licencias', LicSchema);
export default LicModel;
