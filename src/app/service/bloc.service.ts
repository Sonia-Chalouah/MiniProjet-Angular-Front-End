import { Injectable } from '@angular/core';
import { Bloc } from '../Model/Bloc';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../Model/Chambre';
import { Foyer } from '../Model/Foyer';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private baseUrl = "http://localhost:8081/bloc";
  private chambreBaseUrl = "http://localhost:8081/chambre";
  private foyereBaseUrl = "http://localhost:8081/foyer"

  apiUrl: any;

  constructor(private http: HttpClient) { }
  getAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.foyereBaseUrl}/findAll`);
  }
  getAllblocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.baseUrl}/a`);
  }
  getAllChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.chambreBaseUrl}/findAll`);
  }
  getBlocById(id: number): Observable<Bloc> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Bloc>(url);
  }

  deleteBloc(bloc: Bloc): Observable<void> {
    const url = `${this.baseUrl}/delete/${bloc.idBloc}`;
    return this.http.delete<void>(url);
  }
  createBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.baseUrl}/add`, bloc);
  }
  affecterChambreAbloc(numChambre: number, nomBloc: string): Observable<Bloc> {
    const body = [numChambre]; // Convert the number to an array as Spring expects a List<Long>
    return this.http.put<Bloc>(`${this.baseUrl}/affectuerChambresABloc/${nomBloc}`, body);
  }
  getChambresByBlocId(idBloc: number): Observable<Chambre[]> {
    const url = `${this.chambreBaseUrl}/${idBloc}/chambres`;
    return this.http.get<Chambre[]>(url);
  }
 
  getFoyerByBlocId(idBloc: number): Observable<Foyer> {
    const url = `${this.foyereBaseUrl}/${idBloc}/foyer`;
    return this.http.get<Foyer>(url);
  }

 /* 
*/


searchBlocsByName(blocName: string): Observable<Bloc[]> {
  const url = `${this.baseUrl}/search/byBlocName?blocName=${blocName}`;
  return this.http.get<Bloc[]>(url);
}

searchBlocsByFoyer(idfoyer: number): Observable<Bloc[]> {
  const url = `${this.baseUrl}/search/byIdFoyer?idfoyer=${idfoyer}`;
  return this.http.get<Bloc[]>(url);
}

searchBlocsByChambres(numChambre: number): Observable<Bloc[]> {
  const url = `${this.baseUrl}/search/byChambre?numChambre=${numChambre}`;
  return this.http.get<Bloc[]>(url);
}


/*updateChambre(chambre: Chambre): Observable<Chambre> {
  const url = `${this.chambreBaseUrl}/update`;
  return this.httpClient.put<Chambre>(url, chambre);
}*/

  updateBloc(bloc: Bloc): Observable<Bloc> {
    const url = `${this.baseUrl}/update`;
    return this.http.put<Bloc>(url,bloc);
  }



  
  findById(idBloc: number):Observable<Bloc> {
    return this.http.get<Bloc>(this.baseUrl + idBloc);
  }

  getChambresByBloc(idBloc: number): Observable<Chambre[]> {
    const url = `${this.chambreBaseUrl}/${idBloc}/chambres`; // Update the URL to include the idBloc path variable
    return this.http.get<Chambre[]>(url);
  }
  sortBlocsByName(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.apiUrl}/blocs/sortByName`);
  }

}
