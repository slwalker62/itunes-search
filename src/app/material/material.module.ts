import { NgModule } from '@angular/core';
import {MatInputModule, MatButtonModule, MatTableModule} from '@angular/material';

const MaterialComponents = [
  MatInputModule,
  MatButtonModule,
  MatTableModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
