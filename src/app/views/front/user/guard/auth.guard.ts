import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../../../../service/user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router, private tostr: ToastrService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


//this page cant access user :
const unauthorizedPages = ['etudiant','foyer','admin','universite','bloc','chambre','reservation'];


    if (this.service.isloggedin()) {
      // Check if the route contains 'user' and the role is 'user'
      if (route.url.toString().includes('user') && this.service.getrole() === 'admin') {
        this.router.navigate(['/admin/foyer/Dashboard']);
        return false; 
      }

      // Check if the route contains 'admin/etudiant' and the role is not 'admin'
      if (
        unauthorizedPages.some(page => route.url.toString().includes(page)) &&
        this.service.getrole() === 'user'
      ) {
        this.router.navigate(['']);
        this.tostr.warning('Access denied. You dont have access to admin.');
        return false;
      }

      // Add similar checks for other roles and routes as needed

      return true;
    } else {
      // If not logged in, navigate to 'login'
      this.router.navigate(['login']);
      this.tostr.warning('Please login to access this page.');
      return false;
    }
  }
}
