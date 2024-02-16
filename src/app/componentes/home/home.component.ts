import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  limpiarSesionStorage(): void {
    sessionStorage.clear();
    console.log('Sesión storage limpiada');
    this.router.navigate(['login']);
  }

  constructor(private router: Router) {}
}
