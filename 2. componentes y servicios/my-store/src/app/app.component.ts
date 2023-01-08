import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imgParent = 'https://www.feelcats.com/wp-content/uploads/2019/03/gatitos.jpg';

  onLoaded(img: string) {
    console.log('Log Padre', img);
  }
}
  