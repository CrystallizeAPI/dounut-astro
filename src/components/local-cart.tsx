import type { LocalCartItem } from "../use-cases/contracts/LocalCartItem";

export const LocalCart = () => {
    const cart =
        typeof window !== "undefined" && localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart") || "{}")
            : [];
    const total = cart?.reduce(
        (amount: number, item: LocalCartItem) => item.price + amount,
        0
    );

    return (
        <div className="py-20 text-text lg:w-auth mx-auto w-full">
            <h1 className="text-4xl font-bold  mb-10">
                Your shopping cart ({cart.length})
            </h1>
            <div className="flex flex-col gap-5 bg-background1 p-20">
                {cart.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="flex justify-between items-center"
                    >
                        <div className="flex flex-col">
                            <p className="font-semibold text-xl">
                                {item.name} × {item.quantity}
                            </p>
                            <div className="flex gap-3">
                                {item.attributes?.map(
                                    (
                                        attr: { key: string; value: string },
                                        index: number
                                    ) => (
                                        <div
                                            className="even:after:content-['\00a0-'] even:before:content-['-\00a0']"
                                            key={index}
                                        >
                                            {attr.value}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <p>${item.price * item.quantity}</p>
                    </div>
                ))}
                <div className="flex justify-between items-center border-t-2 border-text pt-4">
                    <p className="font-semibold text-xl">Total</p>
                    <p>${total}</p>
                </div>
                <a
                    href="/checkout"
                    className="bg-text text-primary p-3 mt-10 rounded font-semibold text-center"
                >
                    Checkout
                </a>
            </div>
        </div>
    );
};
