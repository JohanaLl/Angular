import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('Change just img => ', this.img);
    //code
  }

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  counter = 0;
  counterFn: number | undefined;


  constructor() {
    //before render
    // NO async -- once time
    console.log('Constructor ', 'imgValue =>', this.img);

  }

  ngOnInit(): void {
    //before render
    //async - fetch once time
    console.log('ngOnInit ', 'imgValue =>', this.img);
    this.counterFn = window.setInterval(() => {
      this.counter +=1;
      console.log('run counter');
    }, 1000)
  }

  ngOnChanges(changes: SimpleChanges) {
    //before-durin render times
    //el objetivo es actualizar los inputs
    console.log('ngOnChanges ', 'imgValue =>', this.img);
    console.log('changes ', changes);

  }

  ngAfterViewInit() {
    //after render
    //handler children
    console.log('ngAfterViewInit ', 'imgValue =>', this.img);
  }

  ngOnDestroy() {
    //delete
    console.log('ngOnDestroy ');
    window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log("log hijo");
    this.loaded.emit(this.img);

  }
}
