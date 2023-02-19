import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  currentProduct: Product;
  dataLoaded = false;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentProduct(product: Product) {
    this.currentProduct = product;
  }

  getCurrentProductClass(product: Product) {
    if (product == this.currentProduct) {
      return 'list-group-item d-flex justify-content-between align-items-start active';
    } else {
      return 'list-group-item d-flex justify-content-between align-items-start';
    }
  }

  getAllProductClass() {
    if (!this.currentProduct || this.currentProduct["id"]==0) {
      return 'list-group-item d-flex justify-content-between align-items-start active';
    } else {
      return 'list-group-item d-flex justify-content-between align-items-start';
    }
  }

  clearCurrentProduct(){
    this.currentProduct = {
      id:0,
      productCode:0,
      productName:""
    };
  }
}
