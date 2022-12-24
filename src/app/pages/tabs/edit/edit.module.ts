import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EditPage } from './edit.page';

import { HomePageRoutingModule } from './edit-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers: [
    DatePipe,
  ],
  declarations: [EditPage]
})
export class EditPageModule { }
