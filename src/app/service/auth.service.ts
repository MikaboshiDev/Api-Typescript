import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import UserModel from '../models/auth.model';
import { encrypt, verified } from '../utils/bcrypt.handler';
import { signToken } from '../utils/jwt.handler';

const registerNewUser = async ({ email, password, name }: User) => {
     const checkIs = await UserModel.findOne({ email: email });
     if (checkIs) return 'USER_ALREADY_EXIST';

     const passHash = await encrypt(password);
     if (!passHash) return 'ERR_ENCRYPT_PASSWORD';
     const registerNewUser = await UserModel.create({
          email: email,
          password: passHash,
          name: name,
     });
     return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
     const checkIs = await UserModel.findOne({ email });
     if (!checkIs) return 'DATE_INCORRECT';

     const passwordHash = checkIs.password;
     const isCorrect = await verified(password, passwordHash);

     if (!isCorrect) return 'PASSWORD_INCORRECT';

     const token = signToken(checkIs.email);
     const data = { token, user: checkIs };
     return data;
};

const Authdelete = async ({ email, password }: Auth) => {
     const checkUser = await UserModel.findOne({ password: password, email: email })
     if (!checkUser) return "USER_NOT_EXIST"

     await UserModel.findOneAndDelete({ password: password, email: email });
     return "DELETE_USER_AUTH"
}

export { loginUser, registerNewUser, Authdelete };
