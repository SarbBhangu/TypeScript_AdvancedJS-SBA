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
│   └── main.ts
└── tsconfig.json

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




