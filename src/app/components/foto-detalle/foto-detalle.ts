import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaService } from '../../services/galeria.service';

@Component({
  selector: 'app-foto-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foto-detalle.html',
  styleUrl: './foto-detalle.css'
})
export class FotoDetalleComponent {
  galeriaService = inject(GaleriaService);

  cerrar(): void {
    this.galeriaService.seleccionarFoto(null);
  }
}