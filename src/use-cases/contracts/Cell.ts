import type { ProductVariant } from "@crystallize/js-api-client";

export type CellProps = {
    cell: {
        item: {
            name: string;
            path: string;
            topics: { name: string }[];
            variants: ProductVariant[];
        };
        layout: {
            colspan: number;
            rowspan: number;
        };
    };
};
