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
  createBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.baseUrl}/add`, bloc);
  }
  affecterChambreAbloc(numChambre: number, nomBloc: string): Observable<Bloc> {
    const body = [numChambre]; // Convert the number to an array as Spring expects a List<Long>
    return this.http.put<Bloc>(`${this.baseUrl}/affectuerChambresABloc/${nomBloc}`, body);
  }

  searchBlocs(nomBloc?: string): Observable<Bloc[]> {
    const params: { [key: string]: any } = {};
    if (nomBloc) {
      params['nomBloc'] = nomBloc;}
    const url = `${this.baseUrl}/search`;
    return this.http.get<Bloc[]>(url, { params });
  }

  deleteBloc(bloc: Bloc): Observable<void> {
    const url = `${this.baseUrl}/delete/${bloc.idBloc}`;
    return this.http.delete<void>(url);
  }

  updateBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.baseUrl}/update`, bloc);
  }
  
  findById(idBloc: number):Observable<Bloc> {
    return this.http.get<Bloc>(this.baseUrl + idBloc);
  }

  getChambresByBloc(idBloc: number): Observable<Chambre[]> {
    const url = `${this.chambreBaseUrl}/chambres/${idBloc}`;
    return this.http.get<Chambre[]>(url);
  }
}
