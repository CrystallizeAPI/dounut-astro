import type {
    ProductPriceVariant,
    ProductVariant,
} from "@crystallize/js-api-client";

export function isEqual(a: any, b: any): boolean {
    // Handle primitive types and references to the same object
    if (a === b) {
        return true;
    }

    // Handle arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!isEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }

    // Handle objects
    if (typeof a === "object" && typeof b === "object") {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) {
            return false;
        }

        for (const key of keysA) {
            if (!isEqual(a[key], b[key])) {
                return false;
            }
        }

        return true;
    }

    // Handle other types
    return false;
}

export const getComponentContentById = (arr: any[], id: string) => {
    return arr.find((item) => item.id === id)?.content;
};

export const getCurrencySymbol = (code: string, price: number) => {
    const symbol = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: code,
    });
    return symbol.format(price);
};

export const getDefaultPriceVariant = (variants?: ProductPriceVariant[]) => {
    return variants?.find((variant) => variant.identifier === "default");
};

export const variantToCartItem = (variant: ProductVariant) => {
    const defaultPrice = getDefaultPriceVariant(variant.priceVariants || []);
    return {
        sku: variant.sku,
        name: variant.name,
        quantity: 1,
        price: defaultPrice?.price,
        image: variant.images?.[0].url,
        attributes: variant.attributes,
    };
};
