import Shopify from "shopify-api-node";

const shopify = new Shopify({
  shopName: "your-store-name",
  apiKey: "your-api-key",
  password: "your-api-password",
});

shopify.product
  .list()
  .then((products) => {
    // Do something with the products
  })
  .catch((err) => {
    // Handle errors
  });
