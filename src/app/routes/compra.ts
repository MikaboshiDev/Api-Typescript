import { Router, Response, Request } from 'express';
import {
     deleteItem,
     getItem,
     getItems,
     postItem,
     updateItem,
} from '../controllers/compra.controllers';
import { logMiddleware } from '../middleware/log';
import { checkJwt } from '../middleware/session';
const router = Router();

/*
 * OBTENCION DE DISTINTOS CAMPOS:
 * (INFO DE COMPRA, COMPRAS TOTALES, PEDIR UNA COMPRA, ELIMINAR UN PEDIDO, ACTUALIZAR UN PEDIDO)
 */

//CheckJwt es para verificar que el usuario este logueado por medio de token
// logMiddleware es para registrar las peticiones que se hacen a la api

//http://localhost:3000/compra

/**
 * @openapi
 * /compra/{user}/{id}:
 *   get:
 *     tags:
 *        - Compras
 *     summary: Obtiene informacion de un item en especifico de un usuario
 *     description: Obtiene informacion de un item en especifico de un usuario para detalles de soporte, duracion, componentes y demas
 *     operationId: GetItem
 *     requestBody:
 *        content:
 *            application/json:
 *               schema:
 *                  $ref: "#/components/schemas/compras"
 *            application/x-www-form-urlencoded:
 *               schema:
 *                  $ref: "#/components/schemas/compras"
 *            application/xml:
 *               schema:
 *                  $ref: "#/components/schemas/compras"
 *     responses:
 *      "200":
 *         description: Item encontrado y devuelto
 *      "422":
 *         description: Error en la validacion de los datos.
 *      "500":
 *         description: Error en el servidor.
 *     security:
 *        - bearerAuth: []
 *   put:
 *     tags:
 *       - Compras
 *     summary: Actualiza una cotizacion en especifico de un usuario
 *     description: Actualiza un cotizacion en especifico de un usuario para detalles de soporte, duracion, componentes y demas
 *     operationId: UpdateItem
 *     requestBody:
 *        content:
 *            application/json:
 *               schema:
 *                  $ref: "#/components/schemas/compra"
 *            application/x-www-form-urlencoded:
 *               schema:
 *                  $ref: "#/components/schemas/compra"
 *            application/xml:
 *               schema:
 *                  $ref: "#/components/schemas/compra"
 *     responses:
 *       "200":
 *           description: Item actualizado
 *       "422":
 *           description: Error en la validacion de los datos.
 *       "500":
 *           description: Error en el servidor.
 *     security:
 *           - bearerAuth: []
 *   delete:
 *      tags:
 *         - Compras
 *      summary: Elimina una cotizacion anteriormente enviada
 *      description: Elimina una cotizacion en especifico de un usuario para detalles de soporte, duracion, componentes y demas
 *      operationId: DeleteItem
 *      requestBody:
 *          content:
 *            application/json:
 *               schema:
 *                  $ref: "#/components/schemas/compras"
 *            application/x-www-form-urlencoded:
 *               schema:
 *                  $ref: "#/components/schemas/compras"
 *            application/xml:
 *               schema:
 *                  $ref: "#/components/schemas/compras"
 *      responses:
 *         "200":
 *             description: Item eliminado
 *         "422":
 *             description: Error en la validacion de los datos.
 *         "500":
 *             description: Error en el servidor.
 *      security:
 *           - bearerAuth: []
 * /compra/{user}:
 *   get:
 *     tags:
 *        - Compras
 *     summary: Obtiene todos los items de un usuario que a comprado
 *     description: Obtiene todos los items de un usuario que a comprado para mostrarlos en su perfil de soporte o en su perfil de usuario
 *     operationId: GetItems
 *     requestBody:
 *       content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/compras"
 *     responses:
 *      "200":
 *         description: Items encontrados y devueltos
 *      "422":
 *         description: Error en la validacion de los datos.
 *      "500":
 *         description: Error en el servidor.
 *   post:
 *     tags:
 *        - Compras
 *     summary: Envia una cotizacion de un item a e soporte de staff para su aprobacion
 *     description: Envia una cotizacion de un item a e soporte de staff para su aprobacion y poder comenzar a trabajar en el
 *     operationId: PostItem
 *     requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  $ref: "#/components/schemas/compras"
 *            application/x-www-form-urlencoded:
 *               schema:
 *                  $ref: "#/components/schemas/compras"
 *            application/xml:
 *               schema:
 *                  $ref: "#/components/schemas/compras"
 *     responses:
 *        "200":
 *             description: Item enviado
 *        "422":
 *             description: Error en la validacion de los datos.
 *        "500":
 *             description: Error en el servidor.
 */
router.get('/:user/:id', checkJwt, getItem); // Para obtener un item en especifico de un usuario
router.get('/:user', checkJwt, getItems); // Para obtener todos los items de un usuario
router.put('/:user/:id', checkJwt, logMiddleware, updateItem); // Para actualizar un item en especifico de un usuario
router.post('/:user', checkJwt, logMiddleware, postItem); // Para crear un item en especifico de un usuario
router.delete('/:user/:id', checkJwt, logMiddleware, deleteItem); // Para eliminar un item en especifico de un usuario

export { router };
