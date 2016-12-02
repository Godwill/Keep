import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {IndexComponent} from "../containers/index/index.component";
import {AboutComponent} from "../containers/about/about.component";
import {NotesContainerComponent} from "../containers/notes-container/notes-container.component";
import {AuthService} from "../services/auth/auth.service";
import {AuthComponent} from "../containers/auth/auth.component";

export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: IndexComponent,
    canActivate: [AuthService],
    children: [
      { path: '', component: NotesContainerComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]);
