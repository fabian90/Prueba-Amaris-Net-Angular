import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar directivas comunes

@Component({
  selector: 'app-menu',
  standalone: true,  // Define el componente como standalone
  imports: [CommonModule, RouterOutlet, RouterLink,RouterModule],  // Asegúrate de importar lo necesario
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // Si tienes funciones para la autenticación, también las puedes agregar aquí.
}