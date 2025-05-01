import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {


data:any;
data2:any;

  constructor(private http: HttpClient) {}



    ngOnInit() {      
        


navigator.geolocation.getCurrentPosition(position => {

        
const lat = position.coords.latitude
const lng = position.coords.longitude
console.log(lat)

        this.http.get<any>("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=71c406cd0696048af1069afda7277927").subscribe(data => {
            this.data = data.main.temp-273.17;
            this.data2 = data.weather[0].icon
               

        })

  });
      


  
   

 }



 
 
 












  }
















