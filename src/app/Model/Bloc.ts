import { Foyer } from './Foyer';

import { Chambre } from './Chambre';
export class Bloc {


  
  idBloc!: number ;
  nomBloc!: string ;
  capaciteBloc!: number;
  chambres!: Chambre[] ; // Renommez cette propriété de "chambres" à "chambre"
  foyer!: Foyer;
  numeroChambre!:number;
 
      }