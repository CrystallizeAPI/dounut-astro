export type OrderProps = {
    order: {
        id: string;
        cart: {
            name: string;
            quantity: number;
            price: {
                gross: number;
                net: number;
            };
        }[];
        total: {
            gross: number;
            net: number;
        };
    };
};
