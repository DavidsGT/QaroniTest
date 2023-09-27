import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, EMPTY, catchError, map, of } from 'rxjs';
import { AlertService } from '../utils/alerts/alert.service';
import { Person } from '../models/person.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons: Person[] = [];
  personsSource: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>(this.persons);
  public persons$ = this.personsSource.asObservable();
  constructor(
    private router : Router,
    private alertService: AlertService
  ) { 
  }
  
  add(person: any) {
    person.id = this.persons.length;
    this.persons.push(new Person(person));
    this.personsSource.next(this.persons);
  }
  getById(id: number) {
    return of(this.persons.find(p=>(p.id === id)));
  }
}
