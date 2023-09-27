import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit{

  persons?: Person[];

  constructor(
    private personService:PersonService
  ) {

  }
  ngOnInit(): void {
    this.getPersons();
  }
  getPersons() {
    this.personService.persons$.subscribe(
      (p:Person[])=> {
        this.persons = p;
      }
    );
  }
}
