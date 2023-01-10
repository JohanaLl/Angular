import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgParent = 'https://www.feelcats.com/wp-content/uploads/2019/03/gatitos.jpg';
  showImage = true;

  onLoaded(img: string) {
    console.log('Log Padre', img);
  }

  toggleImg() {
    this.showImage = !this.showImage;
  }
}
