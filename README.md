## E-Commerce Product Management System

# Overview

This project is a TypeScript-based E-commerce Product Management System, built for the Per Scholas “TypeScript and Advanced JavaScript” SBA.

It demonstrates:
- TypeScript features (types, interfaces, modules)
- Object-Oriented Programming (OOP)
- Asynchronous operations with async/await
- API interaction using Fetch
- Custom error handling
- Modular application structure
- The app fetches product data, applies discounts, calculates tax, handles errors safely, and displays clean output for the first five products.

# Folder Structure:
```text
e-commerce-system/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   ├── services/
│   │   └── apiService.ts
│   ├── utils/
│   │   ├── discountCalculator.ts
│   │   ├── errorHandler.ts
│   │   └── taxCalculator.ts
│   └── index.ts
└── tsconfig.json
```

models/
- Holds your Product class.

services/
- Fetches products from the DummyJSON API
- Handles network errors
- Converts API data into Product objects

utils/
- discountCalculator.ts → Calculates discounted prices
- taxCalculator.ts → Calculates tax per product
- errorHandler.ts → Custom error class + safe error logging

index.ts
- Runs the program
- Fetches products
- Uses utilities to compute discount and tax
- Logs formatted output

# How to Use (bash)
Install dependencies
- npm install
Compile TypeScript
- npx tsc
Run application
- node dist/index.js

# API
- https://dummyjson.com/products

## Reflection

In this project, I used TypeScript to keep my code organized, clear, and easy to work with. I used modules with import and export so each part of the project had its own file, like the Product model, utilities, and API service. For OOP, I created a Product class and used a constructor to initialize product properties. This made each product feel like a real object in the system and made the code more reusable and structured.

One of the challenges I faced was understanding how async functions and await worked. Another issue I ran into was forgetting to call runApp() at the end of my main file, so nothing printed when I ran the program. I overcame these challenges by breaking the problem into small steps, testing each part, and reading the logic slowly. Debugging step-by-step helped me understand what was actually happening in the program.

For asynchronous operations, I used async/await inside the fetchProducts() function. This let me wait for the API response before continuing, which made the code easier to read. For error management, I added a simple check: if the API response wasn’t OK, I threw a custom ValidationError. I also used a small handleError function to safely log errors. This kept the program from crashing and made the error messages clearer.


