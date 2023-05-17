import { Router, Response, Request } from 'express';
import { logMiddleware } from '../middleware/log';
import { Comiciones } from '../controllers/info.controllers';
const router = Router();

/*
 * LOGUEO Y REGISTRO DE USUARIOS QUE CUNSULTEN LA API
 */

//loginCtrl: Funciona para el logueo del usuario en la api
//registerCtrl hacee el registro del usuario en la api para su token y su jwt

//http://localhost:3000/info

/**
 * @openapi
 * /comiciones:
 *  get:
 *    tags:
 *      - Informacion
 *    summary: Comiciones abiertas actualmente en el servidor de discord
 *    description: Obtiene informacion de las comiciones abiertas actualmente en el servidor de discord por parte del servidor de owner
 *    operationId: getComiciones
 *    requestBody:
 *       content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/info"
 *          application/x-www-form-urlencoded:
 *            schema:
 *              $ref: "#/components/schemas/info"
 *          application/xml:
 *            schema:
 *              $ref: "#/components/schemas/info"
 *    responses:
 *     "200":
 *        description: Comiciones encontradas y devueltas
 *     "422":
 *        description: Error en la validacion de los datos.
 *     "500":
 *        description: Error en el servidor.
 *
 */
router.get('/comiciones', logMiddleware, Comiciones);
export { router };
