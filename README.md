# Book Publishing and Selling Web Application

This is a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It serves as a platform for publishing and selling books online.

## Features

- **User Authentication**: Allow users to sign up, log in, and manage their accounts securely.
- **Book Publishing**: Authors can publish their books by providing details such as title, description, author, genre, etc.
- **Book Selling**: Users can browse and purchase books published by various authors.
- **Shopping Cart**: Users can add books to their shopping cart and proceed to checkout.
- **Payment Gateway Integration**: Secure payment processing for book purchases.
- **Search and Filter**: Users can search for books by title, author, genre, etc., and apply filters to narrow down their search.
- **Admin Panel**: Admins can manage books, users, orders, and other aspects of the platform.

## Technologies Used

- **Frontend**: React.js, CSS, react-bootstrap, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ORM for modeling data)
- **Authentication**: JSON Web Tokens (JWT) for user authentication and authorization
- **Payment**: Integration with a payment gateway Braintree.
- **Other Tools and Libraries**: Axios (for API requests), React Router (for client-side routing), etc.

## Installation

1. first go to .env file and replace the  values with your own credentials .
        MONGO_URL = your-mongodb-uri
        JWT_SECRET = your-secert-key-like-HETFKGOREKS
        BRAINTREE_MERCHANT_ID=your-braintree-merchant-id
        BRAINTREE_PUBLIC_KEY=your-braintree-public-key
        BRAINTREE_PRIVATE_KEY=tour-braintree-private-key

2. for running the application
first do "npm install" in main folder
then go to client folder by doing "cd client" then  "npm install".

after that in main folder run command npm run dev to start both client and server code

for runing the client and server  separately use these commands :

For Server Side :
"npm run server" in main folder

For Client Side :
"npm start" in client folder

Now you can open http://localhost:3000 to see the application running</s>


