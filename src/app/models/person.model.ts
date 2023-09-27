import { PeliculaFavorita } from "src/app/interfaces/pelicula-favorita";
import { Person as p } from "../interfaces/person";

export class Person implements p{
  id!: number;
  nombre!: string;
  apellido!: string;
  fechaNacimiento!: Date;
  peliculasFavoritas!: PeliculaFavorita[];
  hijos!: p[];
  get nombresCompletos(): string {
    return [this.apellido,this.nombre].join(' ');
  }
  constructor(o: any) {
    Object.assign(this,o);
  }
}