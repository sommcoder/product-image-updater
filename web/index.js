// @ts-check
import "dotenv/config";
import express from "express";
import shopify from "./shopify.js";
import "@shopify/shopify-api/adapters/node"; // adapter for client library

// import GDPRWebhookHandlers from "./gdpr.js";

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

app.get("/my-endpoint", async (req, res) => {
  const sessionId = await shopify.session.getCurrentId({
    isOnline: true,
    rawRequest: req,
    rawResponse: res,
  });

  // use sessionId to retrieve session from app's session storage
  // getSessionFromStorage() must be provided by application
  const session = await getSessionFromStorage(sessionId);

  const client = new shopify.clients.Rest({
    session,
    apiVersion: ApiVersion.January23,
  });
});

const getResponse = await client.get({
  path: "products",
});
console.log(getResponse.headers, getResponse.body);

app.listen(PORT);
