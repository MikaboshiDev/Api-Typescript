export interface buy {
     usuario: string;
     premium: boolean;
     partner: boolean;
     compra: {
          nombre: string;
          precio: number;
          descuento: boolean;
          categoria: string;
          fecha: Date;
     };
}
