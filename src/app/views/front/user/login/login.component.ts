import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../service/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }


  result: any;

  loginform = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.GetUserbyCode(this.loginform.value.id).subscribe((item) => {
        this.result = item;
        if (this.result && this.result.password === this.loginform.value.password) {
          sessionStorage.setItem('username', this.result.id);
          sessionStorage.setItem('role', this.result.role);
  
          if (this.result.role === 'admin') {
            console.log(this.result.role);
            this.router.navigate(['/admin']);
          } else if (this.result.role === 'user') {
            this.router.navigate([""]);
          } else {
            // If the role is neither admin nor user, handle it accordingly
            this.showAnimatedAlert('Unknown role. Unauthorized Access');
            this.router.navigate(['/unauthorized']);
          }
        } else {
          this.showAnimatedAlert('Invalid credentials');
        }
      });
    } else {
      this.showAnimatedAlert('Please enter valid data.');
    }
  }
  
  showAnimatedAlert(message: string) {
    const alertDiv = document.createElement('div');
    alertDiv.textContent = message;
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '20px';
    alertDiv.style.right = '20px'; // Ajustez la marge droite selon vos besoins
    alertDiv.style.padding = '15px';
    alertDiv.style.backgroundColor = '#f8d7da';
    alertDiv.style.color = '#721c24';
    alertDiv.style.border = '1px solid #f5c6cb';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.opacity = '0';
    alertDiv.style.transition = 'opacity 0.5s ease-in-out';
  
    document.body.appendChild(alertDiv);
  
    // Affiche l'alerte avec une animation de fondu
    setTimeout(() => {
      alertDiv.style.opacity = '1';
    }, 10);
  
    // Disparition après 5 secondes
    setTimeout(() => {
      alertDiv.style.opacity = '0';
    }, 5000);
  
    // Supprime l'élément après la disparition
    setTimeout(() => {
      document.body.removeChild(alertDiv);
    }, 5500);
  }
  
}