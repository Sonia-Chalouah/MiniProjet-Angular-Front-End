import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Etudiant } from './../Model/Etudiant';
import { map, catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class etudiantService {
  private apiServer: string = 'http://localhost:8081/etudiant/';
  private baseURL: string = 'http://localhost:8081/etudiant/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http: HttpClient) { }

 

  getAllEtudiants(): Observable<Etudiant[]> {
    return this._http.get<Etudiant[]>(this.apiServer + 'getAllEtudiants', this.httpOptions);
  }

  deleteEtudiants(id:number){
    return this._http.delete<Etudiant[]>(this.apiServer +'deleteEtudiant/'+id, this.httpOptions);
    }

  createEmployee(etudiant: Etudiant) {
    return this._http.post<Etudiant>(this.apiServer + 'addEtudiant', etudiant, this.httpOptions);  }


    updateEmployee(etudiant: Etudiant) {
      return this._http.put<Etudiant>(this.apiServer + 'updateEtudiant', etudiant, this.httpOptions);  }



    
getEmployeeById(idEtudiant: number): Observable<Etudiant>{
  return this._http.get<Etudiant>(`${this.baseURL}/${idEtudiant}`);
}






ModifierFoyer(etudiant: Etudiant){
  return this._http.put<Etudiant>(this.apiServer + 'updateEtudiant', etudiant, this.httpOptions);  }
}





