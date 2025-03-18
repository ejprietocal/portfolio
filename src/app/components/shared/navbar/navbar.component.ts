import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResizeObserverDirective } from '../../../directives/resize-observer.directive';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    ResizeObserverDirective
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public menuOpen = false;
  public isClosing = false;

  screenSize :number = window.innerWidth;

  onSizeChange(size: number) {
    this.screenSize = size;
  }

  toggleMenu() {
    if (this.menuOpen) {
      this.isClosing = true; // Activar la animación de salida
      setTimeout(() => {
        this.menuOpen = false; // Ocultar después de la animación
        this.isClosing = false; // Resetear el estado
      }, 500);
    } else {
      this.menuOpen = true; // Mostrar el menú inmediatamente
    }
  }

}
