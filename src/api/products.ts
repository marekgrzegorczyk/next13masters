import { type ProductResponseItem } from "@/app/products/page";
import { type ProductListItemType } from "@/app/UI/types";
import { type TypedDocumentString } from "@/gql/graphql";

const productResponseItemToProductListItemType = (
  product: ProductResponseItem,
): ProductListItemType => {
  return {
    id: product.id,
    name: product.title,
    category: product.category,
    price: product.price,
    image: {
      alt: product.title,
      src: product.image,
    },
  };
};

type GraphQLResponse<T> =
  | { data?: undefined; errors: { message: string }[] } // * union type
  | { data: T; errors?: undefined };

export const executeGraphql = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  // variables: TVariables,
): Promise<TResult> => {
  if (!process.env.GRAPHQL_URL) {
    throw TypeError("GRAPHQL_URL is not defined");
  }

  const res = await fetch(process.env.GRAPHQL_URL, {
    method: "POST",
    body: JSON.stringify({
      query,
      // variables,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

  if (graphqlResponse.errors) {
    throw TypeError(`GraphQL Error`, {
      cause: graphqlResponse.errors,
    });
  }

  return graphqlResponse.data;
};

export const getProductsList = async () => {
  const res = await fetch(
    "https://naszsklep-api.vercel.app/api/products?take=20",
  );
  const productsResponse = (await res.json()) as ProductResponseItem[];
  const products = productsResponse.map(
    productResponseItemToProductListItemType,
  );
  return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${id}`,
  );
  const productResponse = (await res.json()) as ProductResponseItem;
  return productResponse;
};
