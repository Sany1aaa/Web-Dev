import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() removeProduct = new EventEmitter<Product>();

  constructor(private cartService: CartService) {}

  onLike(): void {
    if (this.product) {
      this.product.likes += 1;
    }
  }

  onAddToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      window.alert('Your product has been added to the cart!');
    }
  }

  onRemove(): void {
    if (this.product) {
      this.removeProduct.emit(this.product);
    }
  }
}
