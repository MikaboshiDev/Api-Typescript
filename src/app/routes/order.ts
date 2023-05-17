import { Router } from 'express';
import {
     GetStatus,
     authGet,
     getLicenses,
     getOrder,
     getOrders,
} from '../controllers/orders.controllers';
import { checkJwt } from '../middleware/session';
import { logMiddleware } from '../middleware/log';
import { deleteAuths } from '../controllers/auth.controllers';
const router = Router();

/*
 * PETICIONES DDEL OWNER A LA API REST
 */

//http://localhost:3000/order

/**
 * @openapi
 * /info/compras:
 *    get:
 *      tags:
 *         - Developer
 *      summary: Obtiene todas las compras realizadas hasta el momento
 *      description: Obtiene todas las compras realizadas hasta el momento en el servidor y/o cliente
 *      operationId: GetOrders
 *      requestBody:
 *         content:
 *           application/json:
 *             schema:
 *              $ref: "#/components/schemas/compra"
 *      responses:
 *        "200":
 *            description: Compras encontradas y devueltas en total del mes
 *        "422":
 *            description: Error en la validacion de los datos.
 *        "500":
 *            description: Error en el servidor.
 *      security:
 *            - bearerAuth: []
 * /info/{user}/compras:
 *   get:
 *     tags:
 *       - Developer
 *     summary: Obtiene todas las compras de un usuario en especifico
 *     description: Obtiene todas las compras de un usuario en especifico para detalles de soporte, duracion, componentes y demas
 *     operationId: GetOrder
 *     requestBody:
 *         content:
 *             application/json:
 *                schema:
 *                  $ref: "#/components/schemas/compra"
 *     responses:
 *      "200":
 *        description: Compra encontrada y devuelta
 *      "422":
 *        description: Error en la validacion de los datos.
 *      "500":
 *        description: Error en el servidor.
 *     security:
 *        - bearerAuth: []
 * /auth/{user}/{id}:
 *    delete:
 *       tags:
 *         - Developer
 *       summary: Elimina a un usuario del auth de la api por medio de JWT
 *       description: Puedes eliminar usuarios a travez de la id y el usuario dentro de la api por la base de datos de la aplicacion
 *       operationId: DeleteAuth
 *       requestBody:
 *           content:
 *                application/json:
 *                    schema:
 *                        $ref: "#/components/schemas/register"
 *                application/xml:
 *                    schema:
 *                       $ref: "#/components/schemas/register"
 *                application/x-www-form-urlencoded:
 *                    schema:
 *                       $ref: "#/components/schemas/register"
 *       responses:
 *         "200":
 *            description: Usuario eliminado correctamente
 *         "422":
 *            description: Error en la validacion de los datos.
 *         "500":
 *            description: Error en el servidor.
 * /info/auth:
 *    get:
 *      tags:
 *        - Developer
 *      summary: Obtiene la cantidad de usuarios registrados actualmente
 *      description: Obtiene la cantidad de usuarios registrados actualmente en el servidor y/o cliente para detalles de soporte, duracion, componentes y demas
 *      operationId: GetAuth
 *      requestBody:
 *         content:
 *              application/json:
 *                 schema:
 *                    $ref: "#/components/schemas/register"
 *              application/x-www-form-urlencoded:
 *                 schema:
 *                    $ref: "#/components/schemas/register"
 *              application/xml:
 *                 schema:
 *                    $ref: "#/components/schemas/register"
 *      responses:
 *        "200":
 *           description: Usuarios encontrados y devueltos en total del mes
 *           content:
 *              application/json:
 *                 schema:
 *                   $ref: "#/components/schemas/register"
 *        "422":
 *           description: Error en la validacion de los datos.
 *        "500":
 *           description: Error en el servidor.
 *      security:
 *           - bearerAuth: []
 * /info/licencias:
 *   get:
 *      tags:
 *         - Developer
 *      summary: Obtiene la cantidad de licencias en el registro
 *      description: Obtiene la cantidad de licencias en el registro para control de inventario
 *      operationId: GetLic
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    $ref: "#/components/schemas/licencia"
 *             application/x-www-form-urlencoded:
 *                schema:
 *                    $ref: "#/components/schemas/licencia"
 *             application/xml:
 *                schema:
 *                    $ref: "#/components/schemas/licencia"
 *      responses:
 *           "200":
 *              description: Licencias encontradas y devueltas en total del mes y año actual
 *              content:
 *                 application/json:
 *                     schema:
 *                        $ref: "#/components/schemas/licencia"
 *           "422":
 *              description: Error en la validacion de los datos.
 *           "500":
 *              description: Error en el servidor.
 * /info/status:
 *     get:
 *       tags:
 *          - Developer
 *       summary: Obten los estaos de servicio de la api
 *       description: Obten el estado de la api aparit de una pagina web de estados
 *       operationId: GetStatus
 *       requestBody:
 *           content:
 *              application/json:
 *                     schema:
 *                          $ref: "#/components/schemas/status"
 *              application/x-www-form-urlencoded:
 *                          $ref: "#/components/schemas/status"
 *              application/yml:
 *                          #$ref: "#/components/schemas/status"
 *       response:
 *          "200":
 *              description: Estado de la api devuelto correctamente
 *              content:
 *                  application/json:
 *                     schema:
 *                         $ref: "#/components/schemas/status"
 *          "422":
 *              description: Error en la validacion de los datos.
 *          "500":
 *              description: Error en el servidor.
 *
 */
router.get('/info/compras', checkJwt, getOrders); // Todas las compras realizadas hasta el momento
router.get('/info/:user/compras', checkJwt, getOrder); // Todas las compras de un usuario en especifico
router.get('/info/auth', checkJwt, authGet); // Todas las licencias creadas hasta el momento
router.delete('/auth/:user/:id', checkJwt, logMiddleware, deleteAuths); // Elimina a alguien del registro de la api
router.get('/info/licencias', checkJwt, logMiddleware, getLicenses); // Crear una licencia para un usuario en especifico
router.get('/info/status', checkJwt, logMiddleware, GetStatus); // Eliminar una licencia de un usuario en especifico

export { router };
