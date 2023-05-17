import { Router, Response, Request } from 'express';
import { logMiddleware } from '../middleware/log';
import { registerCtrl, loginCtrl } from '../controllers/auth.controllers';
const router = Router();

/*
 * LOGUEO Y REGISTRO DE USUARIOS QUE CUNSULTEN LA API
 */

//loginCtrl: Funciona para el logueo del usuario en la api
//registerCtrl hacee el registro del usuario en la api para su token y su jwt

//http://localhost:3000/auth

/**
 * @openapi
 * /register:
 *   post:
 *      tags:
 *        - Auth
 *      summary: Registra un usuario para tener acceso a las rutas de la api
 *      description: Registra un usuario en la api para su token y su jwt y lo devuelve en un json para asi acceder a las demas rutas con enritamiento por token los datos como el email y la contraseña son datos unicos asi que no son repetidos
 *      operationId: AddUser
 *      requestBody:
 *          content:
 *               application/json:
 *                   schema:
 *                       $ref: "#/components/schemas/register"
 *               application/xml:
 *                   schema:
 *                      $ref: "#/components/schemas/register"
 *               application/x-www-form-urlencoded:
 *                   schema:
 *                      $ref: "#/components/schemas/register"
 *      responses:
 *          "200":
 *              description: Usuario registrado
 *              content:
 *                  application/json:
 *                     schema:
 *                       $ref: "#/components/schemas/register"
 *          "422":
 *              description: Error en la validacion de los datos.
 *          "500":
 *              description: Error en el servidor.
 *      security:
 *          - bearerAuth: []
 * /login:
 *   post:
 *     tags:
 *        - Auth
 *     summary: Loguea de usuarios por medio de contraseña y email
 *     description: Loguea tu usuario para obtener tu token jwt y poder acceder a las de mas rutas de la api con enritamiento por token
 *     operationId: AddUser
 *     requestBody:
 *         content:
 *             application/json:
 *                schema:
 *                   $ref: "#/components/schemas/login"
 *             application/xml:
 *                schema:
 *                   $ref: "#/components/schemas/login"
 *     responses:
 *       "200":
 *          description: Usuario logueado con exito
 *          content:
 *              application/json:
 *                  schema:
 *                     $ref: "#/components/schemas/login"
 *       "422":
 *          description: Error en la validacion de los datos para su logueo.
 *       "500":
 *          description: Error en el servidor.
 *     security:
 *         - bearerAuth: []
 *
 */
router.post('/register', registerCtrl);
router.post('/login', loginCtrl);

export { router };
