import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'valor init';
  imageDefault = './assets/images/default.png';
  
  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imageDefault;
  }
}
