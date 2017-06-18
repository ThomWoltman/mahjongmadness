import { NgModule } from '@angular/core';
import {MdChipsModule, MdButtonModule, MdCheckboxModule, MdCardModule, MdListModule, MdCoreModule, MdToolbarModule, MdIconModule, MdTabsModule, MdInputModule, MdSelectModule} from '@angular/material';

@NgModule({
  declarations: [
    
  ],
  imports: [
    MdButtonModule, 
    MdCheckboxModule,
    MdCardModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    MdInputModule,
    MdSelectModule,
    MdCoreModule,
    MdChipsModule,
  ],
  exports: [
    MdButtonModule, 
    MdCheckboxModule,
    MdCardModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    MdInputModule,
    MdSelectModule,
    MdCoreModule,
    MdChipsModule,
  ],
})
export class MajesticMdModule { }
