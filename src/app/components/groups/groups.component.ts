import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Group } from 'src/app/interfaces/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  isLoading?: boolean;

  groupsSubscribe?: Subscription;

  obs?: Observable<any>;
      
  dataSourceGroups:MatTableDataSource<Group> = new MatTableDataSource<Group>([]);
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  
  constructor(private groupService: GroupService, private activatedRoute:ActivatedRoute,
      private router: Router
    ) { 
  }

  ngOnInit(): void {
    this.getGroups()
  }
  ngOnDestroy(): void {
    this.groupsSubscribe?.unsubscribe()
  }

  getGroups() {
    this.isLoading = true;
    this.groupsSubscribe = this.groupService.getAll().subscribe(
      (groups:Group[])=>{
        this.isLoading = false;
        this.dataSourceGroups.data = groups;
        this.dataSourceGroups.paginator = this.paginator;
        this.obs = this.dataSourceGroups.connect();
      }
    );
  }
  viewDetails(n: Group){
    console.log(n)
    this.router.navigate([n.groupId], { relativeTo: this.activatedRoute });
  }
}
