import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdCardModule, MdListModule, MdCoreModule, MdToolbarModule, MdIconModule, MdTabsModule, MdInputModule, MdSelectModule} from '@angular/material';

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
  ],
})
export class MajesticMdModule { }
