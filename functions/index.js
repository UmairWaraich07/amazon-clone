// const { onRequest } = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
// const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51NNtUUFpq8D4hAbaCHhi5l7HzvpamEonB2nivOXRk3KBcH04zmuNuR9xUFE6BWTANNdzwtw7vZVzkjGHPkA9fFLz00WezPtl6D"
);

// API

// App config
const app = express();

// Middlewares
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hellow world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request received BOOM!! ==> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-6ce5f/us-central1/api
