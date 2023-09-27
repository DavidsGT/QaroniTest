import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { New } from 'src/app/interfaces/new';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy{
  isLoading?: boolean;

  newsSubscribe?: Subscription;

  obs?: Observable<any>;
      
  dataSourceNews:MatTableDataSource<New> = new MatTableDataSource<New>([]);
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  
  constructor( 
    private newService: NewService, private activatedRoute:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  ngOnDestroy(): void {
    this.newsSubscribe?.unsubscribe();
  }

  getNews() {
    this.isLoading = true;
    this.newsSubscribe = this.newService.getAll().subscribe(
      (news:New[])=>{
        this.isLoading = false;
        this.dataSourceNews.data = news;
        this.dataSourceNews.paginator = this.paginator;
        this.obs = this.dataSourceNews.connect();
      }
    );
  }
  viewDetails(n: New){
    this.router.navigate([n.newId], { relativeTo: this.activatedRoute });
  }
  
}
