import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { ViewAlbumComponent } from './views/view-album/view-album.component';
import { AboutComponent } from './views/about/about.component';
import { SubmitNewAlbumComponent } from './views/submit-new-album/submit-new-album.component';
import { ThanksComponent } from './views/thanks/thanks.component';
import { ErrorComponent } from './views/error/error.component';
import { AlbumService } from './core/album.service';
import { AlbumCardComponent } from './shared/album-card/album-card.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HomeComponent, ViewAlbumComponent, AboutComponent, SubmitNewAlbumComponent, ThanksComponent, ErrorComponent, AlbumCardComponent, NavBarComponent ],
  providers: [ AlbumService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
