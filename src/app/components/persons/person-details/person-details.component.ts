import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent {
  formPerson!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute, private personService: PersonService,
    private formBuilder: FormBuilder
  ) {
    this.formPerson = this.formBuilder.group({
      id: [],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fechaNacimiento: [null, [Validators.required]],
      hijos: this.formBuilder.array([]),
      peliculasFavoritas: this.formBuilder.array([])
    });
    this.activatedRoute.paramMap.subscribe(params => {
      if(params.get("accion") === 'edit') {
        this.getPersonById(Number(params.get("id")));
      }
      if(params.get("accion") === 'new') {

      }
    })
  }
  getPersonById(id: number) {
    this.personService.getById(id).subscribe(
      (p:Person | undefined)=>{
        this.formPerson.patchValue(p || {});
      }
    );
  }
  save() {
    console.log(this.formPerson.value)
  }
  get hijos(): FormArray {
    return this.formPerson.get('hijos') as FormArray;
  }
  removeHijo(i:number) {
    let id = this.hijos.controls[i].get('id')?.value;
    this.hijos.removeAt(i);
  }
  addHijo(){
    this.hijos.push(
      this.formBuilder.group({
        id: [this.hijos.controls.length],
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        fechaNacimiento: ['', [Validators.required]]
      })
    );
  }
  get peliculasFavoritas(): FormArray {
    return this.formPerson.get('peliculasFavoritas') as FormArray;
  }
  removePelicula(i:number) {
    let id = this.peliculasFavoritas.controls[i].get('id')?.value;
    this.peliculasFavoritas.removeAt(i);
  }
  addPelicula(){
    this.peliculasFavoritas.push(
      this.formBuilder.group({
        id: [this.peliculasFavoritas.controls.length],
        nombre: ['', [Validators.required]],
        director: ['', [Validators.required]],
        anio: ['', [Validators.required]],
        hasOscar: ['', [Validators.required]]
      })
    );
  }
}
