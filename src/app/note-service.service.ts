import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private notes=[{
    name : 'Running'
  },
 {
   name : 'Playing'
 },
 {
   name : 'Studying'
 }];

  constructor() { }

  addNote(valueInput){
    this.notes.push({name : valueInput});
  }
  getNotes(){
    return this.notes;
  }
}
