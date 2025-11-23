import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";


async function runApp(): Promise<void> {
    try {
        console.log("Starting E-commerce Product Management System...");

        const products: Product[] = await fetchProducts();

        console.log(`Fetched ${products.length} products.`);
        console.log("Showing first 5 products:\n");

        const firstFive = products.slice(0, 5);

        for (const product of firstFive) {
        const discountedPrice = calculateDiscount(
        product.price,
        product.discountPercentage
        );

        const taxAmount = calculateTax(discountedPrice, product.category);

        const finalPrice = discountedPrice + taxAmount;

        console.log("-------------");
        console.log(product.displayDetails());
        console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
        console.log(`Tax: $${taxAmount.toFixed(2)}`);
        console.log(`Final Price: $${finalPrice.toFixed(2)}\n`);
        }
        console.log("Done.");
    } catch (error) {
        console.error("Application failed to run.");
    }
}

runApp();
