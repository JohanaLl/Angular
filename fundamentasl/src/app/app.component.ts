import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Johana';
  age = 25;
  img = 'https://i.pinimg.com/originals/62/a0/a4/62a0a49df1ff2509dd232bbf95a5b8a1.png'
  btnDisable = true;
  person = {
    name: 'Leidy',
    age: 18,
    avatar: 'https://i.pinimg.com/originals/62/a0/a4/62a0a49df1ff2509dd232bbf95a5b8a1.png',
  }

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  increaseAge () {
    this.person.age +=1;
  }

  onScroll(event: Event) {
    //Leer el evento
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
