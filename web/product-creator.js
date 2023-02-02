import { GraphqlQueryError } from "@shopify/shopify-api";
import shopify from "./shopify.js";

const CREATE_PRODUCTS_MUTATION = `
  query{
    products{
    }
  }
`;

export default async function productCreator(session, count) {
  const client = new shopify.api.clients.Graphql({ session });

  try {
    await client.query({
      data: {
        query: CREATE_PRODUCTS_MUTATION,
        // variables: {
        //   input: {
        //     title: `${randomTitle()}`,
        //     variants: [{ price: randomPrice() }],
        //   },
        // },
      },
    });
  } catch (error) {
    if (error instanceof GraphqlQueryError) {
      throw new Error(
        `${error.message}\n${JSON.stringify(error.response, null, 2)}`
      );
    } else {
      throw error;
    }
  }
}

// function randomTitle() {
//   const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
//   const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
//   return `${adjective} ${noun}`;
// }

// function randomPrice() {
//   return Math.round((Math.random() * 10 + Number.EPSILON) * 100) / 100;
// }
