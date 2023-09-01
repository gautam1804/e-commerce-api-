
# NodeJs: Build The Complete E-Commerce Web API

E-commerce API Introduction
Our E-commerce API is a robust and secure solution designed to support various e-commerce operations, allowing businesses to seamlessly manage product listings, user accounts, shopping carts, and order processing. Built on Node.js, this API integrates with Firebase for database management and utilizes JSON Web Tokens (JWT) for user authentication.

Key Features:

Category Listing: Our API offers a convenient way to retrieve a comprehensive list of product categories, making it easy for users to explore and shop within their preferred categories.

Product Listing: Users can access a wide range of products with essential details such as title, price, description, and availability, all organized based on category IDs.

Product Details: Dive deeper into product information with a dedicated endpoint that fetches detailed data for specific products using their unique IDs.

Cart Management: Effortlessly manage shopping carts by adding products, viewing cart contents, updating quantities, and removing items as needed.

Order Placement: Seamlessly place orders with products from your cart, streamlining the purchasing process for customers.

Order History: Retrieve comprehensive order histories for authenticated users, ensuring transparency and easy access to past transactions.

Order Details: Access detailed information for specific orders using their unique IDs, making order tracking and management straightforward.

User Authentication:

Our API employs robust user authentication powered by JWTs, ensuring that only authenticated users can access sensitive endpoints such as cart management and order placement. Users can easily register, log in, and obtain JWT tokens for secure API requests.

Error Handling:

We prioritize user experience and provide meaningful error responses with clear status codes and details, simplifying troubleshooting and issue resolution.

This E-commerce API is a powerful tool for businesses looking to enhance their online shopping experience, streamline operations, and provide a secure and reliable platform for their customers. Whether you're building a web or mobile application, our API is designed to meet your e-commerce needs effectively.


# Run

### Install

```
npm install
```

### Start API

```
npm start
```

# Routes

### Products

```
GET      /api/v1/products
GET      /api/v1/products/:id
POST     /api/v1/products
PUT      /api/v1/products/:id
DELETE   /api/v1/products/:id
PUT gallery-images : /api/v1/products/gallery-images/:id
GET featured products: /api/v1/products/get/featured/:count
GET products count: /api/v1/products/get/count
```

### Orders

```
GET      /api/v1/orders
GET      /api/v1/orders/:id
POST     /api/v1/orders
PUT      /api/v1/orders/:id
DELETE   /api/v1/orders/:id
GET orders count: /api/v1/orders/get/count
```

### Users

```
GET      /api/v1/users
GET      /api/v1/users/:id
POST     /api/v1/users
PUT      /api/v1/users/:id
DELETE   /api/v1/users/:id
GET users count: /api/v1/users/get/count
```

#### Register new user

```
POST     /api/v1/users/register
```

#### Login user

To login the user and get the auth token you can use:

```
POST     /api/v1/users/login
```



# Trello Board
Pick up one task from the board and create the pull request to get the review of every line of the code, to be like in a real world experience!

[Trello Board Link](https://trello.com/invite/b/uOTd4Tce/05d87401c9e950f8fb48477498789ec2/course-tasks)

