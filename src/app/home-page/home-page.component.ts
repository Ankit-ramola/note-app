import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 public notes=[];
 public enteredText :string="";

  constructor(private noteService :NoteServiceService) { 
    this.notes =this.noteService.getNotes();
  }

  ngOnInit(): void {
  }
  onSubmit(event: any) {
    return event.target.player.value;
 }
 removeNote(i){
   this.notes.splice(i, 1);
 }
}
