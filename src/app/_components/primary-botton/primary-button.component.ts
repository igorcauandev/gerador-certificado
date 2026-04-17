import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-botton',
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = false;
}
