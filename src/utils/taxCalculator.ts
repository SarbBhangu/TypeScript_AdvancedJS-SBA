export function calculateTax(price: number, category: string): number {
        
        let taxAmount: number;

        if (category === "groceries") {
         taxAmount = price * 0.03;
        } else {
        taxAmount = price * 0.0475;
        }

        return taxAmount;
}
