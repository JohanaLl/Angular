import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';

  constructor() {
    //before render
    // NO async -- once time
    console.log('Constructor ', 'imgValue =>', this.img);

  }

  ngOnInit(): void {
    //before render
    //async - fetch once time
    console.log('ngOnInit ', 'imgValue =>', this.img);
  }

  ngOnChanges() {
    //before-durin render times
    //el objetivo es actualizar los inputs
    console.log('ngOnChanges ', 'imgValue =>', this.img);
  }

  ngAfterViewInit() {
    //after render
    //handler children
    console.log('ngAfterViewInit ', 'imgValue =>', this.img);
  }

  ngOnDestroy() {
    //delete
    console.log('ngOnDestroy ');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log("log hijo");
    this.loaded.emit(this.img);

  }
}
