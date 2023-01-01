import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10
  name = 'Johana';
  age = 25;
  img = 'https://i.pinimg.com/originals/62/a0/a4/62a0a49df1ff2509dd232bbf95a5b8a1.png'
  btnDisable = true;
  register = {
    name: '',
    email: '',
    password: '',
  }
  person = {
    name: 'Leidy',
    age: 18,
    avatar: 'https://i.pinimg.com/originals/62/a0/a4/62a0a49df1ff2509dd232bbf95a5b8a1.png',
  }

  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';
  emojis = [ '😂' , '🐦', '🐳','🌮', '💚'];
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

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

  addName () {
   this.names.push(this.newName);
   //El ngModel actualiza el valor en el input
   this.newName = '';
  }
   deleteName (index: number) {
    this.names.splice(index, 1);
   }

   onRegister() {
    console.log(this.register);    
   }
}
