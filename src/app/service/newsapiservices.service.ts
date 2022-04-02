import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  //newsapiurl
  newsApiUrl= "https://newsapi.org/v2/top-headlines?country=in&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  techApiUrl= "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  businessApiUrl= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //topheading
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }
  
}
