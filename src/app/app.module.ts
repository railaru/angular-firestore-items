import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ItemService } from './services/item.service';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemFormComponent } from './components/item-form/item-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemFormComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppMaterialModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
