import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-bussinessnews',
  templateUrl: './bussinessnews.component.html',
  styleUrls: ['./bussinessnews.component.css']
})
export class BussinessnewsComponent implements OnInit {

  constructor(private _services : NewsapiservicesService) { }

  bussinessDisplay: any = [];
  ngOnInit(): void {
    this._services.bussinessNews().subscribe((result)=>{
    this.bussinessDisplay = result.articles;
    });
  }

}
