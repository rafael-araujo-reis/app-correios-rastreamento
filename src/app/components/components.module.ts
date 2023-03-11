import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

const components = [ButtonComponent];
@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [components],
  exports: [components],
})
export class ComponentsModule {}
