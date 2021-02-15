import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {id: 1, name:'Captain America', superPower:'Strength, agility, stamina, healing ability, expert tactician, martial artist, indestructible shield', address:'Manhattan, New York City, New York'},
    {id: 2, name:'Moon Knight', superPower:'Strength, speed, stamina, prophetic visions, power dependent on how full the moon is', address:'Chicago, Illinois'},
    {id: 3, name:'Black Panther', superPower:'Enhanced senses, superhuman condition, speed, martial artist, magical resistance, Vibranium-assisted outfit', address:'Wakanda'},
    {id: 4, name:'Jessica Jones', superPower:'Superhuman strength, flight, immunity to mind control', address:'Unrevealed, possibly Forest Hills, New York'},
    {id: 5, name:'Blade', superPower:'Strength, speed, reflexes, immune to vampire bites, master swordsman', address:'Soho, London, England'},
    {id: 6, name:'Killmonger', superPower:'Strength, expert tactician and manipulator, peak-level hunter, genius-level intellect', address:'NJadaka village, Wakanda'},
    {id: 7, name:'Wolverine', superPower:'Reflexes, agility, senses, retractable adamantium-plated bone claws, regeneration, indestructible skeleton', address:'Alberta, Canada'},
    {id: 8, name:'Ultron', superPower:'Strength, speed, stamina, genius-level artificial intelligence, makes calculations with superhuman speed and accuracy, nigh indestructibility via adamantium bodies, flight', address:'Created in Cresskill, New Jersey'},
    {id: 9, name:'Iron Fist', superPower:'Kung fu mastery, hypnosis, chi-empowered punches via concentration and a hand protected from pain and injury', address:'New York'},
    {id: 10, name:'Ghost Rider', superPower:'Supernatural motorcycle, immunity to damage, superhuman strength, projecting hellfire, “penance stare”, mentally-controlled chains', address:'Waukegan, Illinois'},
    {id: 11, name:'Hulk', superPower:' Strength, speed, stamina, durability, regeneration, nigh invulnerability, breathing underwater', address:'Dayton, Ohio'},
    {id: 12, name:'Spider-Man', superPower:'Strength, jumping, leaping, speed, “danger sense” precognition, custom web-shooters', address:'Forest Hills, New York'},
    {id: 13, name:'Loki', superPower:'Strength; stamina, speed, genius, mastery of magic and illusion, energy projection, shapeshifting', address:'Jotunheim, Asgard'},
    {id: 14, name:'Black Bolt', superPower:'Strength, stamina, self-control, flight, devastating sonic projection via speech', address:'Island of Attilan, Atlantic Ocean'},
    {id: 15, name:'Captain Marvel', superPower:'Strength, speed, stamina, resistant to most toxins, energy absorption and manipulation', address:'Boston, Massachusetts'},
  ]

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }
}
