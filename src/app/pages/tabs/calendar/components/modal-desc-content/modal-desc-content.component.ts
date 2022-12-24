import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-desc-content',
  templateUrl: './modal-desc-content.component.html',
  styleUrls: ['./modal-desc-content.component.scss'],
})
export class ModalDescContentComponent implements OnInit {
  @Input() modalData!: { date: string, content: string };
  @Input() isOpen!: boolean;
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickCancel(): void {
    this.isOpenChange.emit(false);
  }

}
