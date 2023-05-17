import { Router } from 'express';
import { readdirSync } from 'fs';
const router = Router();

const path = `${__dirname}`;

const clearname = (fileName: string) => {
     const file = fileName.split('.').shift();
     return file;
};

// Lee las carpetas de routes (NOTA: el nombre de los archivos sera la ruta principal) y las importa
// Ejemplo: app\routes\user.ts => http://localhost:3000/user

readdirSync(path).filter((fileName) => {
     const name = clearname(fileName);
     if (name !== 'index') {
          import(`./${name}`).then((modules) => {
               console.log(`Cargando la ruta señalada a la API REST. . . /${name}`.cyan);
               router.use(`/${name}`, modules.router);
          });
     }
});

export { router };
