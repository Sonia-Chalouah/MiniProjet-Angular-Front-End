import { Injectable } from '@angular/core';
import { Universite } from '../Model/Universite';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foyer } from '../Model/Foyer';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  private universiteBaseUrl = 'http://localhost:8081/universite';
  private foyerBaseUrl = 'http://localhost:8081/foyer';
  universiteAjoute:Universite=null;
  idUniversiteAModifier:number=null;
  universiteAmodiefier:Universite=null;
 

  constructor(private httpClient: HttpClient) { }

  getUniversiteList(): Observable<Universite[]> {
    return this.httpClient.get<Universite[]>(`${this.universiteBaseUrl}/findAll`);
  }
  

  getUniversiteByID(idUniversite: number): Observable<Universite> {
    return this.httpClient.get<Universite>(`${this.universiteBaseUrl}/${idUniversite}`);
  }

  createUniversite(universite: Universite): Observable<Universite> {
    return this.httpClient.post<Universite>(`${this.universiteBaseUrl}/add`, universite);
  }

  updateUniversite(universite: Universite) {
    return this.httpClient.put<Universite>(this.universiteBaseUrl + '/update', universite);  
  }
  /*
  affecterFoyerAuniversite(idfoyer:number,nomUniversite:string):Observable<any>{
    return this.httpClient.post<universite>(`${this.universiteBaseUrl}/${idfoyer}/${nomUniversite}`);
  }
  */

  deleteUniversite(universite: Universite): Observable<void> {
    const url = `${this.universiteBaseUrl}/delete/${universite.idUniversite}`;
    return this.httpClient.delete<void>(url);
  }

  getFoyerList(): Observable<Foyer[]> {
    return this.httpClient.get<Foyer[]>(`${this.foyerBaseUrl}/findAll`);
  }
  getFoyerByUniversite(idUniversite: number): Observable<Foyer> {
    const url = `${this.foyerBaseUrl}/foyer/${idUniversite}`;
    return this.httpClient.get<Foyer>(url);
  }

  affecterFoyerUniversite(idFoyer:number,nomUniversite: String):Observable<Universite>{
    const url = `${this.universiteBaseUrl}/${idFoyer}/${nomUniversite}`;
    return this.httpClient.put<Universite>(url, null);
  }

  desaffecterFoyerUniversite(idUniversite:number):Observable<Universite>{
    const url = `${this.universiteBaseUrl}/${idUniversite}`;
    return this.httpClient.put<Universite>(url, null);
  }

  setUniversiteAj(universite:Universite){
    this.universiteAjoute=universite
  }
  updateUniversiteListAj(univesiteList:Universite[]){
    if(this.universiteAjoute!=null){
      univesiteList.push(this.universiteAjoute)
    }
    
}
getIDUniversiteModifier(id:number){
  this.idUniversiteAModifier=id;
  
}

getUniversiteAModifier(ListeUniversite:Universite[]){
  
  this.universiteAmodiefier=ListeUniversite.find((u)=>u.idUniversite==this.idUniversiteAModifier);
}

setUniversiteAModifier():Universite{
  return this.universiteAmodiefier;
}


}
