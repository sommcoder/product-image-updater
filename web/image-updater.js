import { GraphqlQueryError, shopify } from "@shopify/shopify-api";

const CREATE_PRODUCTS_MUTATION = `
  query{
    products{
    }
  }
`;

export default async function productCreator(session) {
  const client = new shopify.clients.Graphql(
    session?.shop,
    session?.accessToken
  );

  try {
    const res = await client.query({
      data: {
        query: CREATE_PRODUCTS_MUTATION,
      },
    });

    console.log("res:", res);
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
