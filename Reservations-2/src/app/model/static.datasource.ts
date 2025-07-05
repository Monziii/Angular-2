import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
@Injectable()
export class StaticDataSource {
private products: Product[] = [
new Product(1, "Potato", "Vegetable", "Potato (Vegetable)", 16.99),
new Product(2, "Tometo", "Vegetable", "Tometo (Vegetable)", 10.59),
new Product(3, "Hotpepear", "Vegetable", "Hotpeper (Vegetable)", 14),
new Product(4, "Greenpepear", "Vegetable", "Greenpeper (Vegetable)", 14),
new Product(5, "Lemon", "Vegetable", "Lemon (Vegetable)", 13.99),
new Product(6, "Rice", "Food", "Rice (Food)", 11),
new Product(7, "Kidney bean", "Food", "Kidney bean (Food)", 10),
new Product(8, "Soya bean", "Food", "Soya bean (Food)", 12),
new Product(9, "Flour", "Food", "Flour (Food)", 15),
new Product(10, "Green beans", "Food", "Green beans (Food)", 17),
new Product(11, "Strawberry", "fruit", "Strawberry (fruit)", 13),
new Product(12, "Bluberry", "fruit", "Bluberry (fruit)", 22),
new Product(13, "Rasberry", "fruit", "Rasberry (fruit)", 15),
new Product(14, "Cramberry", "fruit", "Cramberry (fruit)", 14),
new Product(15, "Blackberry", "fruit", "Blackerry (fruit)", 17),
new Product(16, "Milk", "Dairy", "Milk (Dairy)", 11),
new Product(17, "Yogurt", "Dairy", "Yogurt (Dairy)", 17),
new Product(18, "Cheese", "Dairy", "Cheese (Dairy)", 15),
new Product(19, "Feta", "Dairy", "Feta (Dairy)", 10),
new Product(20, "Camembert", "Dairy", "Camembert (Dairy)", 16),



];
getProducts(): Observable<Product[]> {
return from([this.products]);
}
}
