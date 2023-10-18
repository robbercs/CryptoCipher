import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() optionSelected = new EventEmitter<string>();

  selectOption(option: string): void {
    this.optionSelected.emit(option);
    console.log(option);
  }
}

