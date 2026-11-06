import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GaleriaService } from '../../services/galeria.service';
import { Foto } from '../../Models/foto';

@Component({
  selector: 'app-galeria-fotos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './galeria-fotos.html',
  styleUrl: './galeria-fotos.css'
})
export class GaleriaFotosComponent {
  galeriaService = inject(GaleriaService);
  filtroCategoria: string = 'todas';
  
  get fotosFiltradas(): Foto[] {
    const lista = this.galeriaService.fotos();
    if (this.filtroCategoria === 'todas') {
      return lista;
    }
    return lista.filter(foto => foto.categoria === this.filtroCategoria);
  }

  abrirDetalle(foto: Foto): void {
    this.galeriaService.seleccionarFoto(foto);
  }
}