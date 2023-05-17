import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
     openapi: '3.0.0',
     info: {
          title: 'Api Horus - Backend',
          description: [
               'Somos una api de control de (compras, ventas, licencias, subida de archivos y mas) para tu negocio o empresa y te ayudamos a llevar el control de tu negocio o empresa apartir de la comunicaion con los cores disponibles la peticion de estos datos es un dato esencial para el soporte de los cores a cargo del desarrollo de `> HORUS CREATOR DEVELOPMENT` si quieres visitar su pagina no olvide ver el siguiente link [Click Aqui](studiodeveloper.online)\n',
               'Datos que se piden en soporte de los Cores:',
               '```json',
               '{',
               '    "id": "1234567890102371828172",',
               '    "name": "Horus",',
               '    "email": "exampledevelopment@gmail.com",',
               '    "compra:" {',
               '        "nombre:" "CORENEKO",',
               '        "precio:" "1000",',
               '        "fecha:" "2021-10-10",',
               '        "hora:" "10:10:10"',
               '    }',
               '}',
               '```\n',
               'Este servicio se encuentra bajo *moderacion constante y se encuentra en desarrollo por lo que puede haber errores y fallos en el servicio*, si encuentras algun error o fallo no dudes en reportarlo en el servidor de soporte de discord del creador igual en caso de malos usos se aplicaras sanciones correspondientes segun las normas del mismo servidor',
               'en caso de dudas y sugerencias para mejorar nuestro servicios no dude de visitarnos atte: `> HORUS DEVELOPMENT CREATOR 2023` fecha de creacion del servicio `> 2021 - 2023 (en desarrollo)` muchas gracias por usar nuestro servicio\n',
               'Visita los siguientes links del creador:',
               '- [The Github Respository](https://github.com/MikaboshiDev)',
               '- [Discord Server Support](https://discord.gg/w28Dnc4sHj)',
               '- [Partner Hosting Teramont](https://discord.gg/vFFjEgGqd8)',
          ].join('\n'),
          termsOfService: 'https://studiodeveloper.online/',
          contact: {
               email: 'kanjigostudio@gmail.com',
          },
          license: {
               name: 'Apache 2.0',
               url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
          },
          version: '0.0.1',
     },
     servers: [
          {
               url: 'http://localhost:3000',
               api: 'https://api-horus.herokuapp.com',
          },
     ],
     components: {
          securitySchemes: {
               bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
               },
               api_key: {
                    type: 'apiKey',
                    name: 'api_key',
                    in: 'header',
               },
          },
          schemas: {
               register: {
                    type: 'object',
                    required: ['name', 'password', 'email'],
                    properties: {
                         name: {
                              type: 'string',
                              example: 'Horus',
                         },
                         email: {
                              type: 'string',
                              example: 'HorusDeveloper200@gmail.com',
                         },
                         password: {
                              type: 'string',
                              example: '123456789',
                         },
                    },
               },
               login: {
                    type: 'object',
                    required: ['password', 'email'],
                    properties: {
                         email: {
                              type: 'string',
                              example: 'HorusDeveloper200@gmail.com',
                         },
                         password: {
                              type: 'string',
                              example: '123456789',
                         },
                    },
               },
               compra: {
                    type: 'object',
                    required: ['nombre', 'precio', 'descuento', 'categoria', 'fecha'],
                    properties: {
                         nombre: {
                              type: 'string',
                              example: 'Nekocore',
                         },
                         precio: {
                              type: 'number',
                              example: 1000,
                         },
                         descuento: {
                              type: 'boolean',
                              example: true,
                         },
                         categoria: {
                              type: 'string',
                              example: 'Core',
                         },
                         fecha: {
                              type: 'string',
                              example: '2021-04-14T00:00:00.000Z',
                         },
                    },
               },
               compras: {
                    type: 'object',
                    required: ['usuario', 'nombre', 'precio', 'categoria'],
                    properties: {
                         usuario: {
                              type: 'string',
                              example: 'Horus',
                         },
                         premium: {
                              type: 'boolean',
                              example: true,
                         },
                         partner: {
                              type: 'boolean',
                              example: true,
                         },
                         compra: {
                              $ref: '#/components/schemas/compra',
                         },
                    },
               },
               upload: {
                    type: 'object',
                    required: ['fileName', 'idUser', 'path'],
                    properties: {
                         fileName: {
                              type: 'string',
                              example: 'img-14042023.jpg',
                         },
                         idUser: {
                              type: 'string',
                              example: '1291982192819812',
                         },
                         path: {
                              type: 'string',
                              example: 'C:UsersHorusDesktopimg-14042023.jpg',
                         },
                    },
               },
               licencia: {
                    type: 'object',
                    required: ['id', 'tipo'],
                    properties: {
                         id: {
                              type: 'string',
                              example: '123456789',
                         },
                         tipo: {
                              type: 'string',
                              example: 'Premium',
                         },
                    },
               },
               orders: {
                    type: 'object',
                    required: ['usuario', 'id', 'tipo'],
                    properties: {
                         usuario: {
                              type: 'string',
                              example: 'Horus',
                         },
                         licencia: {
                              $ref: '#/components/schemas/licencia',
                         },
                    },
                    xml: {
                         name: 'Order',
                    },
               },
               status: {
                    type: 'object',
                    required: ['status'],
                    properties: {
                         status: {
                              type: 'string',
                              example: 'Horus',
                         },
                    },
               },
               info: {
                    type: 'object',
                    required: ['info'],
                    properties: {
                         bots: { type: 'boolean', example: true },
                         minecraft: { type: 'boolean', example: true },
                         discord: { type: 'boolean', example: true },
                         web: { type: 'boolean', example: true },
                    },
                    xml: {
                         name: 'Info',
                    },
               },
          },
     },
};

const swaggerOptions: OAS3Options = {
     swaggerDefinition,
     apis: ['./src/app/routes/*.ts'],
};

export default swaggerJSDoc(swaggerOptions);
