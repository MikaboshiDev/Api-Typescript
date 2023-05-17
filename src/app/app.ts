import swaggerUi from 'swagger-ui-express';
import swaggerSetup from '../docs/swagger';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'colors';
import 'dotenv/config';

const PORT = process.env.port || 3001;
import { router } from './routes';
import db from './config/mongo';
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(cors());
app.use(router);
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSetup));

db().then(() => {
     console.log(
          `Conectado a la base de datos el dia: ${new Date().toLocaleDateString()}`.green
               .bold
     );
});

app.listen(PORT, () => {
     console.log(`Servidor corriendo en el servicio via Puerto: ${PORT}`.yellow.bold);
});
