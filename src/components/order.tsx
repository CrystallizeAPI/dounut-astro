import type { OrderProps } from "../use-cases/contracts/Order";

export const Order = ({ order }: OrderProps) => {
    const { total } = order;
    return (
        <div className="lg:w-auth lg:p-20 bg-background3 mx-auto mt-20 text-text w-full p-10">
            <div>
                <h1 className="font-bold text-3xl mb-6">Order Confirmation</h1>
                <p className="mb-5">We have received your order #{order.id}.</p>
                <div>
                    {order?.cart.map((item, index: number) => {
                        return (
                            <div
                                key={index}
                                className="flex justify-between mb-4"
                            >
                                <div>
                                    <p>
                                        {item.name} x {item.quantity}
                                    </p>
                                </div>
                                <p>${item.price.gross * item.quantity}</p>
                            </div>
                        );
                    })}
                    <div className="flex flex-col gap-3 border-t-2 pt-5">
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p>${total.gross}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Tax</p>
                            <p>${total.net - total.gross}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-bold">Total</p>
                            <p>${total.net}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
