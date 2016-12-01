import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  @Input() colors: string[] = [];
  @Output() selected = new EventEmitter();

  isSelectorVisible: boolean = false;

  showSelector(value: boolean){
    this.isSelectorVisible = value;
  }

  selectColor(color: string) {
    this.showSelector(false);
    this.selected.next(color);
  }

  constructor() { }

  ngOnInit() {
  }

}
