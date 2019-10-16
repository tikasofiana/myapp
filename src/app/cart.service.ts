import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Facial Wash',
      expanded: true,
      products: [
        { id: 0, name: 'Acnes', price: '50', imageUrl : '/assets/img/a.jpg' },
      ]
    },
    {
      category: 'Toner',
      products: [
        { id: 1, name: 'Hadalabo', price: '55', imageUrl : '/assets/img/e.jpg'},
        { id: 2, name: 'Cosrx', price: '60', imageUrl : '/assets/img/d.jpg'},
      ]
    },
	{
      category: 'Cream ',
      products: [
        { id: 3, name: 'Some By Me ', price: '100', imageUrl : '/assets/img/b.jpg'},
		{ id: 4, name: 'Sun Protection', price: '96', imageUrl : '/assets/img/c.jpg' },
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}