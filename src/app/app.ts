import { Component } from '@angular/core';
import { GaleriaFotosComponent } from './components/galeria-fotos/galeria-fotos';
import { FotoDetalleComponent } from './components/foto-detalle/foto-detalle';
import { CargaFotosComponent } from './components/carga-fotos/carga-fotos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GaleriaFotosComponent, FotoDetalleComponent, CargaFotosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}