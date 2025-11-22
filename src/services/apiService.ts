import {Product} from "../models/Product";
import {ValidationError, handleError } from "../utils/errorHandler";


const productURL = "https://dummyjson.com/products";


export async function fetchProducts(): Promise<Product[]> {
        try {
        const response = await fetch(productURL);

        if (!response.ok) {
        throw new ValidationError("Failed to fetch products", response.status);
        }

        const data = await response.json();

        const products: Product[] = data.products.map((item:any) => {
        return new Product(
            item.id,
            item.title,
            item.price,
            item.discountPercentage,
            item.category
            );
            });

        return products;
        } catch(error){
            handleError(error);
            throw error;
        }
    }
