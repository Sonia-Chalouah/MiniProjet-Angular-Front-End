import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foyer } from '../Model/Foyer';
import { Universite } from '../Model/Universite';
import { Bloc } from '../Model/Bloc';

@Injectable({
  providedIn: 'root',
})
export class FoyerService {
  private baseUrl = 'http://localhost:8081/foyer';
  private universiteBaseUrl = 'http://localhost:8081/universite';
  private blocBaseUrl = 'http://localhost:8081/bloc';

  constructor(private httpClient: HttpClient) {}

  getAllFoyers(): Observable<Foyer[]> {
    return this.httpClient.get<Foyer[]>(`${this.baseUrl}/findAll`);
  }
  getAlluniversities(): Observable<Universite[]> {
    return this.httpClient.get<Universite[]>(
      `${this.universiteBaseUrl}/findAll`
    );
  }
  getAllblocs(): Observable<Bloc[]> {
    return this.httpClient.get<Bloc[]>(`${this.blocBaseUrl}/findAll`);
  }
  findAllFoyersWithUniversiteAndBlocs(): Observable<Foyer[]> {
    return this.httpClient.get<Foyer[]>(
      `${this.baseUrl}/findAllFoyersWithUniversiteAndBlocs`
    );
  }

  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.httpClient.post<Foyer>(`${this.baseUrl}/add`, foyer);
  }

  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.httpClient.put<Foyer>(`${this.baseUrl}/update`, foyer);
  }

  deleteFoyerbyid(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getFoyerById(id: number): Observable<Foyer> {
    return this.httpClient.get<Foyer>(`${this.baseUrl}/${id}`);
  }

  deleteFoyer(foyer: Foyer): Observable<void> {
    const url = `${this.baseUrl}/delete/${foyer.idFoyer}`;
    return this.httpClient.delete<void>(url);
  }

  searchFoyers(nom?: string, capacite?: number): Observable<Foyer[]> {
    const params: any = {};
    if (nom) {
      params.nom = nom;
    }
    if (capacite) {
      params.capacite = capacite;
    }
    return this.httpClient.get<Foyer[]>(`${this.baseUrl}/searchFoyer`, {
      params,
    });
  }

  getFoyerCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.baseUrl}/foyers/count`);
  }

  addFoyerAndAssignToUniversite(foyer: Foyer, idUniversite: number): void {
    this.httpClient.put<Foyer>(`/baseUrl/${idUniversite}`, foyer).subscribe(
      (response: Foyer) => {
        console.log('Foyer added:', response);
        // Perform any additional operations after adding the foyer
      },
      (error: any) => {
        console.error('Error adding foyer:', error);
        // Handle the error appropriately
      }
    );
  }
  deleteFoyerAndDissociateUniversite(idFoyer: number) {
    const url = `${this.baseUrl}/deleteFoyerAndDissociateUniversite/${idFoyer}`;
    return this.httpClient.delete(url);
  }
  getUniversiteById(id: number): Observable<Universite> {
    return this.httpClient.get<Universite>(`/universiteBaseUrl/${id}`);
  }
  addFoyerEtAffecterAUniversite(
    foyer: Foyer,
    idUniversite: number
  ): Observable<Foyer> {
    return this.httpClient.put<Foyer>(`${this.baseUrl}/${idUniversite}`, foyer);
  }
  getUniversities(): Observable<Universite[]> {
    return this.httpClient.get<Universite[]>(`${this.baseUrl}/findAll`);
  }
  addFoyerEtAffecterAUniversiteByName(
    foyer: Foyer,
    universiteName: String
  ): Observable<Foyer> {
    return this.httpClient.put<Foyer>(
      `${this.baseUrl}/ajouterFoyerEtAffecterAUniversiteByname/${universiteName}`,
      foyer
    );
  }

  ajouterFoyerEtAffecterUniversiteEtBlocByname(
    foyer: Foyer,
    universiteName: String,
    nomBloc: String
  ): Observable<Foyer> {
    return this.httpClient.post<Foyer>(`${this.baseUrl}/ajouterFoyerEtAffecterUniversiteEtBlocByname/${universiteName}/${nomBloc}`,foyer
    );
  }

  updateFoyerAndAssociateUniversite(
    foyerId: number,
    universiteNom: string,
    updatedFoyer: Foyer
  ): Observable<Foyer> {
    const url = `${this.baseUrl}/updateFoyerAndAssignUniversite/${foyerId}/${universiteNom}`;
    return this.httpClient.put<Foyer>(url, updatedFoyer);
  }

  searchFoyersByFoyerName(foyerName: string): Observable<Foyer[]> {
    const url = `${this.baseUrl}/search/byFoyerName?foyerName=${foyerName}`;
    return this.httpClient.get<Foyer[]>(url);
  }

  searchFoyersByUniversite(universityName: string): Observable<Foyer[]> {
    const url = `${this.baseUrl}/search/byUniversite?universityName=${universityName}`;
    return this.httpClient.get<Foyer[]>(url);
  }

  searchFoyersByBloc(bloc: string): Observable<Foyer[]> {
    const url = `${this.baseUrl}/search/byBloc?bloc=${bloc}`;
    return this.httpClient.get<Foyer[]>(url);
  }
  /* getFoyerStatistics(): Observable<Map<string, number[]>> {
    const url = `${this.baseUrl}/statistics`;
    return this.httpClient.get<Map<string, number[]>>(url);
  }*/
  getFoyerStatistics(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/statistics`);
  }
  private foyers: Foyer[] = [];
}
