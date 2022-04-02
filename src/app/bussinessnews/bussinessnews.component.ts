import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-bussinessnews',
  templateUrl: './bussinessnews.component.html',
  styleUrls: ['./bussinessnews.component.css']
})
export class BussinessnewsComponent implements OnInit {

  constructor(private _services : NewsapiservicesService) { }

  businessDisplay: any = [];
  ngOnInit(): void {
    this._services.businessNews().subscribe((result)=>{
    this.businessDisplay = result.articles;
    });
  }

}
