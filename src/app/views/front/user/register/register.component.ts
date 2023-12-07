import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../service/user/auth.service';
// N'oubliez pas d'importer ToastrService si nécessaire

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router) {}

  registerform = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),
    role: this.builder.control('user'),
  });

  proceedregister() {
    if (this.registerform.valid) {
      this.service.RegisterUser(this.registerform.value).subscribe(result => {
        this.showAnimatedAlert('Registered successfully. Please contact admin for enable access.');
        this.router.navigate(['login']);
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
    alertDiv.style.backgroundColor = '#d4edda'; // Utilisez une couleur appropriée
    alertDiv.style.color = '#155724'; // Utilisez une couleur appropriée
    alertDiv.style.border = '1px solid #c3e6cb'; // Utilisez une couleur appropriée
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