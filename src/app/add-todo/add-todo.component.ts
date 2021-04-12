import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
constructor(private noteService :NoteServiceService) { }

  @ViewChild('inputValue') inputValue:ElementRef;

  addNote(){ 
          const valueInput = this.inputValue.nativeElement.value;
          console.log(valueInput);   
          this.noteService.addNote(valueInput);
  }

  removeNote(){
    this.inputValue.nativeElement.value='';
  }
  

  ngOnInit(): void {
  }

}
