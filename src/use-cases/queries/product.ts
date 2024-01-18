import { apiClient } from "../shared";

export async function fetchProduct(path: String) {
    try {
        return await apiClient.catalogueApi(
            `
            #graphql
            query Product($path: String!, $version: VersionLabel) {
              product: catalogue(path: $path, language: "en", version: $version) {
                summary: component(id: "brief") {
                  content {
                    ... on RichTextContent {
                      json
                    }
                  }
                }
                body: component(id: "body") {
                  content {
                    ... on ParagraphCollectionContent {
                      paragraphs {
                        title {
                          text
                        }
                        body {
                          json
                        }
                        images {
                          altText
                          variants {
                            width
                            height
                            url
                          }
                        }
                      }
                    }
                  }
                }
                table: component(id: "nutrition") {
                  content {
                    ... on PropertiesTableContent {
                      sections {
                        title
                        properties {
                          key
                          value
                        }
                      }
                    }
                  }
                }
            
                ... on Product {
                  id
                  name
                  type
                  path
                  defaultVariant {
                    firstImage {
                      url
                      altText
                      variants {
                        url
                        key
                        width
                        height
                        size
                      }
                    }
                  }
            
                  variants {
                    id
                    name
                    sku
                    price
                    priceVariants {
                      identifier
                      name
                      price
                      currency
                    }
                    stock
                    isDefault
                    attributes {
                      attribute
                      value
                    }
                    images {
                      url
                      altText
                      key
            
                      variants {
                        url
                        key
                        width
                        height
                        size
                      }
                    }
                  }
            
                  vatType {
                    name
                    percent
                  }
                }
                related: component(id: "related") {
                  content {
                    ... on ItemRelationsContent {
                      items {
                        path
                        name
                        topics {
                          name
                        }
                        ... on Product {
                          defaultVariant {
                            price
                            firstImage {
                              url
                              altText
                              variants {
                                url
                                key
                                width
                                height
                                size
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
            
          `,
            { path }
        );
    } catch (error) {
        throw error;
    }
}
