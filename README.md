# Amazon Clone

This is a full-stack Amazon clone built using React.js. It aims to replicate the core functionality and user interface of the popular e-commerce platform.

## Features

- Super responsive design, ensuring a seamless experience across all devices.
- User authentication (sign up, sign in, sign out) using Firebase authentication.
- Browse and search products fetched from the [Fakestore API](https://fakestoreapi.com/).
- Add products to the shopping cart.
- Update quantity and remove items from the cart.
- Checkout and place orders using the Stripe payment gateway integrated with Firebase Cloud Functions.
- View order history stored in Firebase Firestore.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Node.js: A runtime environment for executing JavaScript code on the server.
- Firebase: A platform for building web and mobile applications.
- Firebase Authentication: Provides user authentication services.
- Firebase Cloud Functions: Enables serverless backend functionality, including integration with Stripe for payment processing.
- Firebase Firestore: A NoSQL database for storing user data and orders.
- Redux: A predictable state container for managing application state.

## Testing the Payment Method

To test the payment method integration with Stripe, you can use the following card details:

- Card Number: 4242 4242 4242 4242
- Expiry Date: 4242
- CVC: 424
- ZIP: Any 5-digit ZIP code

Please note that this is a test card, as I am using the test key and no real transactions will take place. You can use this card for testing purposes to simulate a successful payment.

Make sure to enter the card details accurately during the checkout process to test the payment functionality.

If you encounter any issues during the payment process or have any questions, please feel free to reach out for assistance.

Happy testing!


## Deployment

The project is deployed on Firebase and can be accessed at [https://clone-6ce5f.web.app](https://clone-6ce5f.web.app/).


## Setup

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/UmairWaraich07/amazon-clone.git`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser and navigate to `http://localhost:3000`

Please feel free to explore the codebase and make any suggestions or improvements.

Happy shopping on the Amazon Clone!
