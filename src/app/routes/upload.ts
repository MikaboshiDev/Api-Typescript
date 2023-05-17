import { Router } from 'express';
import { getFile } from '../controllers/upload.controllers';
import multerMiddleware from '../middleware/file';
import { checkJwt } from '../middleware/session';

/*
 * SUBIDA DE IMAGENES A AWS S3 CON MULTER Y EXPRESS
 */

// http://localhost:3000/upload
// multerMiddleware.single('myfile') => myfile es el nombre del input file en el formulario html
// checkJwt => middleware para validar el token
/**
 * @openapi
 * /upload:
 *   post:
 *     tags:
 *        - Subidas
 *     summary: Sube un archivo a AWS S3 y devuelve la url de descarga
 *     description: Sube un archivo a AWS S3 y devuelve la url de descarga para ser almacenada en la base de datos
 *     operationId: UploadFile
 *     requestBody:
 *         content:
 *            multipart/form-data:
 *               schema:
 *                   $ref: "#/components/schemas/upload"
 *     responses:
 *       "200":
 *          description: Archivo subido correctamente y url de descarga devuelta
 *          content:
 *              application/json:
 *                 schema:
 *                    $ref: "#/components/schemas/upload"
 *       "422":
 *          description: Error en la validacion de los datos.
 *       "500":
 *          description: Error en el servidor.
 */
const router = Router();
router.post('/', checkJwt, multerMiddleware.single('myfile'), getFile);
export { router };
