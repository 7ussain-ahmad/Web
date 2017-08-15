import { Component } from '@angular/core';
import { Product } from './Product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 products: Product[] = [];
 m: string;
  m1: string;
   m2: string;
    m3: string;
i= 0 ;
  addNewProduct( name: string, count: string, price: string) {
    if (name === '' ) {
       this.m = 'please enter at least one product'; this.m1 = ''; this.m2 = ''; this.m3 = '';
   } else if (parseFloat(count) === 0 || count === '') {
    this.m1 = 'please enter at least a count equals 1'; this.m = ''; this.m2 = ''; this.m3 = '';
   }else if (parseFloat(count) <= 0 || parseFloat(price) <= 0 ) {
     this.m2 = 'please enter positive numbers'; this.m1 = ''; this.m = '';  this.m3 = '';
} else if ( price === '') { this.m1 = ''; this.m = ''; this.m2 = '';
    this.m3 = 'please enter a price';
    }else { this.products.push(new Product(name, count, price));
     this.m = ''; this.m1 = ''; this.m2 = '';  this.m3 = ''; }
  }
  removeProduct(product: Product) {
    this.products = this.products.filter(  t => t !== product);
  }
  calculate(p: Product) {
    this.i = 0;
    for (let x = 0; x < this.products.length; x += 1) {
      this.i += this.calc(p[x]);
    }
  return  this.i;
  }
calc(c: Product) {
  if (parseFloat(c.count ) < 0 || parseFloat(c.price ) < 0 ) {
 c.setPrice('0') ;
 c.setCount('0');
  }
return parseFloat(c.count ) * parseFloat(c.price);
}
}
