import { Component } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [...products];
  categories = ['918', '911', 'Cayenne', 'kids'];
  selectedCategory: string | undefined;
  selectedCategoryProduct: Product | undefined;
  filteredProducts: Product[] = [];
  
  share(product: Product) {
    const telegramMessage = `Check out this product: ${product.name} - ${product.description} - ${product.rating} Stars - ${product.kaspiLink}`;
    const telegramURL = `https://t.me/share/url?url=${encodeURIComponent(product.kaspiLink)}&text=${encodeURIComponent(telegramMessage)}`;

    window.location.href = telegramURL;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    this.selectedCategoryProduct = this.products.find(product => product.category === category);
    this.filterProductsByCategory();

    // Create a placeholder product for the selected category
    this.selectedCategoryProduct = {
      id: -1, // Use a unique identifier for the placeholder
      name: category,
      price: 0, // You can set a default price or any other placeholder values
      description: 'Category details', // You can set a default description
      image: '', // You can set a default image URL or leave it empty
      rating: 0, // You can set a default rating or leave it as 0
      kaspiLink: '', // You can set a default link or leave it empty
      likes: 0, // You can set a default number of likes or leave it as 0
      category: category,
    };
  }

  onRemoveProduct(product: Product): void {
    // Implement logic to remove the product from the list
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.filterProductsByCategory();
    }
  }

  private filterProductsByCategory(): void {
    this.filteredProducts = this.selectedCategory
      ? this.products.filter(product => product.category === this.selectedCategory)
      : this.products;
  }
}

