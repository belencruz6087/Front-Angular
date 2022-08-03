import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js'
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
       
    var chart = new Chart('myChart-Bar', {
      type: 'bar',
      data: {
        labels: ["Organizada", "Proactiva", "Metódica", "Practica", "Trabajo en Equipo"
        ],
        datasets: [{
          label: "Soft Skills",
          data: [8, 9, 8, 9.5, 9],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',

          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 2,
          
          hoverBorderColor: "black",

        }]
      },
      
    });
  }

}
