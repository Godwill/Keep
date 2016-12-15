import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule} from '@ngrx/store'

import { AppComponent } from './app.component';
import { NoteCardComponent } from './containers/note-card/note-card.component';
import { AppBarComponent } from './ui/app-bar/app-bar.component';
import { IndexComponent } from './containers/index/index.component';
import {NotesContainerComponent, KeysPipe} from './containers/notes-container/notes-container.component';
import { NoteCreatorComponent } from './containers/note-creator/note-creator.component';
import { ColorPickerComponent } from './ui/color-picker/color-picker.component';
import {ApiService} from "./services/api/api.service";
import {NoteService} from "./services/notes/note.service";
import {routes} from "./routes/routes";
import { AboutComponent } from './containers/about/about.component';
import { AuthComponent } from './containers/auth/auth.component';
import {AuthService} from "./services/auth/auth.service";

import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/notes/notes.effects';
import { reducer as NotesReducer} from './reducers/notes/notes.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NoteCardComponent,
    AppBarComponent,
    IndexComponent,
    NotesContainerComponent,
    NoteCreatorComponent,
    ColorPickerComponent,
    AboutComponent,
    AuthComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    StoreModule.provideStore({
      notes: NotesReducer
    }),
    EffectsModule.run(AppEffects),
  ],
  providers: [ApiService, AuthService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
