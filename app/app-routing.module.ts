import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'; 
import { AboutComponent } from './views/about/about.component'; 
import { ViewAlbumComponent } from './views/view-album/view-album.component'; 
import { SubmitNewAlbumComponent } from './views/submit-new-album/submit-new-album.component';
import { ThanksComponent } from './views/thanks/thanks.component';
import { ErrorComponent } from './views/error/error.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contribute', component: SubmitNewAlbumComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: 'album/:id', pathMatch: 'full', component: ViewAlbumComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/