import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { AppBarComponent } from './ui/app-bar/app-bar.component';
import { IndexComponent } from './containers/index/index.component';
import { NotesContainerComponent } from './containers/notes-container/notes-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteCardComponent,
    AppBarComponent,
    IndexComponent,
    NotesContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
