import { Component } from '@angular/core';
import  { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 

 export class AppComponent {
  constructor() {};
  title = 'Portfolio Belen Cruz';
  ngOnInit(): void {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [            
            ],
            datasets: [{
                data: [55, 100],
                borderColor: 'gray',
                backgroundColor: [
                    'green',
                    'white',
                    ],
                hoverOffset: 4,
                hoverBorderColor: "black",
                
                
            }]
        },
        _options: { responsive: true }
    });
   }
  
}




