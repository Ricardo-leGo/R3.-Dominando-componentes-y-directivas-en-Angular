import { Injectable, signal } from '@angular/core';
import { Foto } from '../Models/foto';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  private fotosSignal = signal<Foto[]>([
    {
      id: '1',
      titulo: 'Paisaje de montaña',
      descripcion: 'Fotografía en plano general de montañas al atardecer.',
      url: 'https://picsum.photos/id/1018/800/600',
      categoria: 'paisaje',
      fecha: new Date()
    },
    {
      id: '2',
      titulo: 'Edificio Urbano',
      descripcion: 'Edificio moderno con iluminación natural.',
      url: 'https://picsum.photos/id/1015/800/600',
      categoria: 'arquitectura',
      fecha: new Date()
    }
  ]);

  private fotoSeleccionadaSignal = signal<Foto | null>(null);

  fotos = this.fotosSignal.asReadonly();
  fotoSeleccionada = this.fotoSeleccionadaSignal.asReadonly();

  seleccionarFoto(foto: Foto | null): void {
    this.fotoSeleccionadaSignal.set(foto);
  }

  agregarFoto(nuevaFoto: Omit<Foto, 'id' | 'fecha'>): void {
    console.log(nuevaFoto);
    const fotoCompleta: Foto = {
      ...nuevaFoto,
      id: crypto.randomUUID(),
      fecha: new Date(),
    };
    this.fotosSignal.update(lista => [fotoCompleta, ...lista]);
  }
}