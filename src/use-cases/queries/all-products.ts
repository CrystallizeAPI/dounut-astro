import { apiClient } from "../shared";

export async function fetchAllProducts() {
    try {
        return await apiClient.catalogueApi(
            `
        #graphql
        {
          catalogue(path:"/shop"){
            children {
              path
            }
          }
        }
      `
        );
    } catch (error) {
        throw error;
    }
}
