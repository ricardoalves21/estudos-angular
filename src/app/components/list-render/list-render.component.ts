import { HttpClient } from '@angular/common/http';
import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent implements OnInit {

  animals: Animal[] = [];

  constructor(
    private listService: ListService,
    private http: HttpClient
  ) {
    this.getAnimals();
   }

  ngOnInit(): void {}

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
