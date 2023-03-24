import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {enableProdMode} from '@angular/core';


enableProdMode();

const url:string = 'http://localhost:8080/movieWs/api/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movie: any;

  constructor(private http: HttpClient){

  }

  ngOnInit(){

    this.http.get(url).subscribe( (data:any)=>{
      console.log("Entró + " + data.results)
      this.movie = data.results;
    })
  }
}
