import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../../Model/Reservation';
import { Observable } from 'rxjs';


interface ApiResponse {
  reservation: Reservation;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  private url:String='http://localhost:8081/reservation/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private _http:HttpClient) { }
 
  /********************************Add Reservation************************************/
  saveReservation(reservation: Reservation):Observable<Reservation>{
    return this._http.post<Reservation>(this.url +'addReservation', reservation);
  }
   /********************************Add Reservation Avancee  Service************************************/
   ajouterReservation(reservation: Reservation): Observable<ApiResponse> {
    const url = `${this.url}ajouterReservation`;
    return this._http.post<ApiResponse>(url, reservation);
  }
  /********************************Get ALL  Reservations************************************/
  getAllReservations():Observable<Reservation[]>{    
    return this._http.get<Reservation[]>(this.url +'getAllReservations', this.httpOptions);
  }
  /********************************Get Mes  Reservations************************************/
  getMesReservations(cinUser: number): Observable<Map<string, Object>> {
    const url = `${this.url}getMesReservations/${cinUser}`;
    return this._http.get<Map<string, Object>>(url);
  }
    /********************************Delete Reservation************************************/
  delete(id:number){
    return this._http.delete<Reservation[]>(this.url +'deleteReservation/'+id, this.httpOptions);
  }
    /********************************refuse Reservation************************************/
  nonValide(id:number){
      return this._http.put<Reservation[]>(this.url +'nonValide/'+id, this.httpOptions);
  }
    /********************************Accept Reservation************************************/
  ouiValide(id:number){
      return this._http.put<Reservation[]>(this.url +'ouiValide/'+id, this.httpOptions);
  }
  /********************************estValide Reservation************************************/
  estValide(id:number) :Observable<Map<string, Object>> {
    return this._http.put<Map<string, Object>>(this.url +'estValide/'+id, this.httpOptions);
}
}


