import { Commande } from './../Model/commande';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Terrain } from '../Model/Terrain';
import { Produit } from '../Model/produit';
import { Reclamation } from '../Model/reclamation';
import { Evenement } from '../Model/Evenement';
import { Reservation } from 'src/reservation';
@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {
  private baseUrl = "http://localhost:8087";

  constructor(  private HttpClient: HttpClient) { }

  //afiichage
  ///////////////////////////////////////////////////////
  getAllTerrains(): Observable<Terrain[]> {
    return this.HttpClient.get<Terrain[]>(`${this.baseUrl}/Terrain/listTerrains`);
  }
  getAllCommandes(): Observable<Commande[]> {
    return this.HttpClient.get<Commande[]>(`${this.baseUrl}/commandes/getAll`);
  }

  getAllProduits(): Observable<Produit[]> {
    return this.HttpClient.get<Produit[]>(`${this.baseUrl}/produits/getAllProduits`);
  }

  getAllReclamation(): Observable<Reclamation[]> {
    return this.HttpClient.get<Reclamation[]>(`${this.baseUrl}/reclamation/list`);
  }

  getAllReservation(): Observable<Reservation[]> {
    return this.HttpClient.get<Reservation[]>(`${this.baseUrl}/reservation/getAllReserv`);
  }


  getAllEvenement(): Observable<Evenement[]> {
    return this.HttpClient.get<Evenement[]>(`${this.baseUrl}/event/events`);
  }

///////////////////////////////////////////////////////////
//add
createReclamation(rec: Reclamation): Observable<Reclamation> {
  return this.HttpClient.post<Reclamation>(`${this.baseUrl}/addReclamation`, rec);
}

createReservation(res: Reservation): Observable<Reservation> {
  return this.HttpClient.post<Reservation>(`${this.baseUrl}/saveReservation`, res);
}

createCommande(ce: Commande): Observable<Commande> {
  return this.HttpClient.post<Commande>(`${this.baseUrl}/commandes/saveCommande`, ce);
}

createProduit(ce: Produit): Observable<Produit> {
  return this.HttpClient.post<Produit>(`${this.baseUrl}/addProduit`, ce);
}

createEvenement(ce: Evenement): Observable<Evenement> {
  return this.HttpClient.post<Evenement>(`${this.baseUrl}/addevents`, ce);
}

createTerrain(ce: Terrain): Observable<Terrain> {
  return this.HttpClient.post<Terrain>(`${this.baseUrl}/addTerrain`, ce);
}
//---------------------------------------------------------
//Delete
deleteCommande(commande: Commande): Observable<void> {
  const url = `${this.baseUrl}/commandes/deleteCommandeById/${commande.id}`;
  return this.HttpClient.delete<void>(url);
}

deleteProduit(produit: Produit): Observable<void> {
  const url = `${this.baseUrl}/deleteProduit/${produit.id}`;
  return this.HttpClient.delete<void>(url);
}
deleteEvenement(event: Evenement): Observable<void> {
  const url = `${this.baseUrl}/deleteEvent/${event.id}`;
  return this.HttpClient.delete<void>(url);
}

deleteReclamation(rec: Reclamation): Observable<void> {
  const url = `${this.baseUrl}/delete/${rec.id}`;
  return this.HttpClient.delete<void>(url);
}
deleteTerrain(ter: Terrain): Observable<void> {
  const url = `${this.baseUrl}/removeTerrain/${ter.id}`;
  return this.HttpClient.delete<void>(url);
}

deleteReservation(re: Reservation): Observable<void> {
  const url = `${this.baseUrl}/deleteReservationById/${re.id}`;
  return this.HttpClient.delete<void>(url);
}

//---------------------------------------------------------
//update

updateTerrain(id: number, updatedTerrain: Terrain): Observable<string> {
  const url = `${this.baseUrl}/updateTerrain/${id}`;
  return this.HttpClient.put<string>(url, updatedTerrain);
}
updateProduit(produit: Produit): Observable<Produit> {
  return this.HttpClient.put<Produit>(`${this.baseUrl}/updateProduit`, produit);
}

updateCommande(Commande: Commande): Observable<Commande> {
  return this.HttpClient.put<Commande>(`${this.baseUrl}/commandes/updateCommande`, Commande);
}

updateReclamation(id: number, updatedR: Reclamation): Observable<string> {
  const url = `${this.baseUrl}/update/${id}`;
  return this.HttpClient.put<string>(url, updatedR);
}

updateEvent(
  id: number,
  eventName: string,
  description: string,
  startDate: string,
  endDate: string,
  location: string
): Observable<any> {
  const url = `${this.baseUrl}/${id}`;
  const params = {
    eventName: eventName,
    description: description,
    startDate: startDate,
    endDate: endDate,
    location: location
  };

  return this.HttpClient.put<any>(url, params);
}


updateReservation(res: Reservation): Observable<Reservation> {
  return this.HttpClient.put<Reservation>(`${this.baseUrl}/updateReservation`, res);
}





}
