import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  props!: {
    description: string;
    type: 'primary' | 'secondary';
    icon?: string;
  };
}
