import { Chambre } from "./Chambre";
import { Etudiant } from "./Etudiant";
import { TypeChambre } from "./TypeC";

export class Reservation{
    idReservation:number;
    anneeUniversitaire:number;
    estValide:boolean;
    numReservation:string;
    cinEtudiant:bigint;
    typeChambre:TypeChambre
    // chambre_reservations:Chambre[];
    // etudiant_reservations:Etudiant[];
}
