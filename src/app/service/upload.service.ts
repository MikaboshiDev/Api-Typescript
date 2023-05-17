import { Storage } from '../interfaces/upload.interface';
import StorageModel from '../models/upload.model';

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
     const responseItem = await StorageModel.create({ fileName, idUser, path });
     if (!responseItem) return 'ITEM_NOT_FOUND';
     return responseItem;
};

export { registerUpload };
