import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { TabComponent } from '../../shared/components/tab/tab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage, TabComponent]
})
export class TabsPageModule { }
