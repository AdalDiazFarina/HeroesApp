import { HeroesServices } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit{
  public heroes: Hero[] = []

  constructor(private heroesServices: HeroesServices) {}

  ngOnInit(): void {
    this.heroesServices.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
