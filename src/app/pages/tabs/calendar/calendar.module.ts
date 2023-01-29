import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { SharedModule } from '../../../shared/shared.module';
import { ModalDescContentComponent } from './components/modal-desc-content/modal-desc-content.component';
import { EmptyArticleComponent } from './components/empty-article/empty-article.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CalendarPageRoutingModule,
  ],
  declarations: [
    CalendarPage,
    ModalDescContentComponent,
    EmptyArticleComponent
  ]
})
export class CalendarPageModule { }
