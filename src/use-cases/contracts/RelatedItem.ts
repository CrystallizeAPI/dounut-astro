import type { ProductVariant } from "@crystallize/js-api-client";

export type RelatedItem = {
    defaultVariant?: ProductVariant;
    name: string;
    path: string;
    topics: { name: string }[];
};
