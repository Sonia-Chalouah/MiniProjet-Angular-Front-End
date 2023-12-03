import { Bloc } from "./Bloc";
import { Reservation } from "./Reservation";

export class Chambre {
    idChambre: number;
    numeroChambre:number;
    typeC: TypeChambre;
    bloc: Bloc;
    reservations: Reservation[]; // Change this lin
}

export enum TypeChambre {
    SIMPLE = 'SIMPLE',
    DOUBLE = 'DOUBLE',
    TRIPLE = 'TRIPLE',
    // Add more room types as needed
  }
