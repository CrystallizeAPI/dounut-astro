import { apiClient } from "../shared";

export async function fetchFrontPage(path: String, version: String) {
    try {
        return await apiClient.catalogueApi(
            `
               #graphql
                query($path: String!, $version: VersionLabel) {
                    catalogue(path: $path, language: "en", version: $version) {
                      meta: component(id: "meta") {
                        content {
                          ... on ContentChunkContent {
                            chunks {
                              content {
                                ... on SingleLineContent {
                                  text
                                }
                                ... on RichTextContent {
                                  plainText
                                }
                                ... on ImageContent {
                                  firstImage {
                                    variants {
                                      url
                                      key
                                      width
                                      height
                                    }
                                    altText
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      grid: component(id: "grid") {
                        content {
                          ... on GridRelationsContent {
                            grids {
                              rows {
                                columns {
                                  layout {
                                    rowspan
                                    colspan
                                  }
                                  item {
                                    name
                                    path
                                    topics {
                                      name
                                    }
                                    ... on Product {
                                      variants {
                                        images {
                                          variants {
                                            url
                                            key
                                            width
                                            height
                                          }
                                          altText
                                        }
                                        price
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    donuts: catalogue(path: "/shop", language: "en") {
                      children {
                        id
                        topics {
                          name
                        }
                        bundle: component(id: "bundle") {
                          content {
                            ... on BooleanContent {
                              value
                            }
                          }
                        }
                        ... on Product {
                          __typename
                          name
                          path
                          topics {
                            name
                          }
                          defaultVariant {
                            firstImage {
                              variants {
                                url
                                key
                                width
                                height
                              }
                              altText
                            }
                            priceVariant(identifier: "default") {
                              price
                              currency
                            }
                          }
                        }
                      }
                    }
                  }
                  
            `,
            {
                path,
                version,
            }
        );
    } catch (error) {
        throw error;
    }
}
