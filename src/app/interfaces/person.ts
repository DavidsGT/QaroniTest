import { PeliculaFavorita } from "./pelicula-favorita";

export interface Person {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  peliculasFavoritas: PeliculaFavorita[];
  hijos: Person[];
}