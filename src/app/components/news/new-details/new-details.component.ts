import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { New } from 'src/app/interfaces/new';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.scss']
})
export class NewDetailsComponent {
  new?: New;
  isLoading?: boolean;
  constructor( 
    private newService: NewService, private activatedRoute:ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.getNewById(Number(params.get("id")));
    })
  }
  getNewById(id: number) {
    this.isLoading = true;
    this.newService.getById(id).subscribe(
      (n:New)=>{
        this.isLoading = false;
        this.new = n;
      }
    );
  }
}
