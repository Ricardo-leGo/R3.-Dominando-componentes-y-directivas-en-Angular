import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GaleriaService } from '../../services/galeria.service';
import { Foto } from '../../Models/foto';

@Component({
  selector: 'app-carga-fotos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carga-fotos.html',
  styleUrl: './carga-fotos.css'
})
export class CargaFotosComponent {
  private galeriaService = inject(GaleriaService);

  mostrarModal = false;
  
  titulo = '';
  descripcion = '';
  url = '';
  categoria: Foto['categoria'] = 'otro';

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.limpiarFormulario();
  }

  // Manejador para leer la imagen seleccionada desde el disco local
  onArchivoSeleccionado(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        // La propiedad result contiene la imagen codificada en Base64
        this.url = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }

  guardarFoto(): void {
    if (!this.titulo || !this.url) return;

    this.galeriaService.agregarFoto({
      titulo: this.titulo,
      descripcion: this.descripcion,
      url: this.url,
      categoria: this.categoria
    });

    this.cerrarModal();
  }

  private limpiarFormulario(): void {
    this.titulo = '';
    this.descripcion = '';
    this.url = '';
    this.categoria = 'otro';
  }
}