import { Schema, model } from 'mongoose';
import { Info } from '../interfaces/info.interface';

const InfoSchema = new Schema<Info>(
     {
          comiciones: {
               bots: { type: Boolean, default: true },
               minecraft: { type: Boolean, default: true },
               discord: { type: Boolean, default: true },
               web: { type: Boolean, default: true },
               ts3: { type: Boolean, default: true },
          },
          development: {
               bots: { type: Boolean, default: true },
               minecraft: { type: Boolean, default: true },
               discord: { type: Boolean, default: true },
               web: { type: Boolean, default: true },
               ts3: { type: Boolean, default: true },
          },
     },
     {}
);

const InfoModel = model('Info', InfoSchema);
export default InfoModel;
