import { apiClient } from "../shared";

export async function getOrderById(id: string) {
    return await apiClient.orderApi(
        `#graphql
        query($id: ID!) {
          orders {
            get(id: $id) {
              id
              cart {
                name
                quantity
                price {
                  gross
                }
              }
              total {
                net
                gross
              }
            }
          }
        }  
    `,
        {
            id,
        }
    );
}
