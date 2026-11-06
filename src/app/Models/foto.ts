export interface Foto {
  id: string;
  titulo: string;
  descripcion: string;
  url: string;
  categoria?: 'paisaje' | 'arquitectura' | 'retrato' | 'otro'; 
  fecha: Date;
}