import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-desc-content',
  templateUrl: './modal-desc-content.component.html',
  styleUrls: ['./modal-desc-content.component.scss'],
})
export class ModalDescContentComponent implements OnInit {
  @Input() modalData!: { key: string, date: string, message: string };
  @Input() isOpen!: boolean;
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickCancel(): void {
    this.isOpenChange.emit(false);
  }

}
