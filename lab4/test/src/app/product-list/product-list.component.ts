import { Component } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products];

  share(product: Product) {
    //window.alert('The product has been shared!');
    //const telegramLink = `https://telegram.me/share/url?url=<http://localhost:4200/products/1>`;
    //window.open(telegramLink, '_blank ');
    const telegramMessage = `Check out this product: ${product.name} - ${product.description} - ${product.rating} Stars - ${product.kaspiLink}`;
    const telegramURL = `https://t.me/share/url?url=${encodeURIComponent(product.kaspiLink)}&text=${encodeURIComponent(telegramMessage)}`;

    window.location.href = telegramURL;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}