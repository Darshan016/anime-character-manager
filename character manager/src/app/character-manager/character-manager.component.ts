import { Component } from '@angular/core';
import { Character } from '../models/character';
import { chars } from '../models/characterlist';
@Component({
  selector: 'app-character-manager',
  templateUrl: './character-manager.component.html',
  styleUrls: ['./character-manager.component.css']
})
export class CharacterManagerComponent {
  char=chars;
  searchText:string = '';
  constructor() {}
  ngOnInit(): void {
  }

  search(){
    if(this.searchText===''||!this.searchText){
      this.char=chars;
    }
    else{
      this.char=chars;
      this.char=this.char.filter(c=>c.name?.startsWith(this.searchText.toLowerCase()));

    }
  }
  reset(){
    this.searchText='';
    this.char=chars;
  }

}
