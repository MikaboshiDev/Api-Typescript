import InfoModel from '../models/info.models';

const getComiciones = async () => {
     const comiciones = await InfoModel.find();
     if (!comiciones) return 'COMISIONS_IS_NO_EXIST';
     return comiciones;
};

export { getComiciones };
