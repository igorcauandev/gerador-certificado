import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secundary-button',
  imports: [CommonModule],
  templateUrl: './secundary-button.component.html',
  styleUrl: './secundary-button.component.css'
})
export class SecundaryButtonComponent {
  @Output() click = new EventEmitter<MouseEvent>();
  @Input() textButton: string = '';
  @Input() phclass: string = '';
  @Input() disabled: boolean = false;

  handleClick(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.click.emit(event);
  }

  ngOnInit(): void {
  }
}
