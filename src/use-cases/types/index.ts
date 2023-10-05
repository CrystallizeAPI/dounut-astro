export type Paragraph = {
  title: {text: string},
  body: {json: any},
  images: any[],
  videos: any[]
}

export type Image = {
  altText: string,
  variants: ImageVariant[]
}


export type ImageVariant = {
  width: number,
  height: number,
  url: string
}

export type TableSection = {
  title: string,
  properties: Property[]
}

export type Property = {
  key: string,
  value: string
}

export type ProductBody = {
  paragraphs: Paragraph[]
}

export type ProductTable = {
  sections: TableSection[]
}