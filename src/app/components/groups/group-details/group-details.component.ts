import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/interfaces/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent {
  group?: Group;
  isLoading?: boolean;
  constructor( 
    private groupService: GroupService, private activatedRoute:ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.getGroupById(Number(params.get("id")));
    })
  }
  getGroupById(id: number) {
    this.isLoading = true;
    this.groupService.getById(id).subscribe(
      (n:Group)=>{
        this.isLoading = false;
        this.group = n;
      }
    );
  }
}
