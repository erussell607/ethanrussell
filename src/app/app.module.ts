import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { AddMemoryComponent } from './add-memory/add-memory.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { ContactComponent } from './contact/contact.component';
import { metaReducers, reducers } from './reducers';
import { ViewMemoriesComponent } from './view-memories/view-memories.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMemoryComponent,
    ViewMemoriesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
