export class Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;

    constructor(
    id: number,
    title: string,
    price: number,
    discountPercentage: number,
    category: string
    ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.category = category;
    } 

    displayDetails(): string {
    return `Product: ${this.title} - $${this.price}`;
    }

    getPriceWithDiscount(): number {
        const discountAmount = (this.price * this.discountPercentage) / 100;
        const finalPrice = this.price - discountAmount;
        return finalPrice;
    }
}