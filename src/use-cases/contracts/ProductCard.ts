import type { Image } from "./Image";

export type ProductCard = {
    product: {
        id: string;
        name: string;
        path: string;
        topics: { name: string }[];
        bundle?: {
            content?: {
                value?: boolean;
            };
        };
        defaultVariant: {
            firstImage: Image;
            priceVariant: {
                price: number;
                currency: string;
            };
        };
    };
};
