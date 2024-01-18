import type { Paragraph } from "./Paragraph";

export type ProductTable = {
    sections: {
        title: string;
        properties: {
            key: string;
            value: string;
        }[];
    }[];
};

export type ProductBody = {
    body: {
        content: {
            paragraphs: Paragraph[];
        };
    };
    table: {
        content: ProductTable;
    };
};
