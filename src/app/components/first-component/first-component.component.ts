import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements OnInit {

  public name: string = "Primeiro componente filho...";
  public age: number = 43;
  public job: string = "Programador";
  public hobbies = ["Correr", "Jogar", "Estudar"];

  public car = {
    name: "Polo",
    year: 2024
  }

  constructor() { }

  ngOnInit(): void {
  }

}
