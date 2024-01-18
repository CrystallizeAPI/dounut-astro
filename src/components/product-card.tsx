import type { ProductCard as ProductCardType } from "../use-cases/contracts/ProductCard";
import { TopicsDisplayer } from "./topics-displayer";
import { Image } from "@crystallize/reactjs-components";

export const ProductCard = ({ product }: ProductCardType) => {
    const isBundle = product?.bundle?.content?.value;
    const priceVariant = {
        price: product?.defaultVariant.priceVariant.price,
        currency: product?.defaultVariant.priceVariant.currency,
    };
    const image = product?.defaultVariant.firstImage;
    return (
        <>
            {!isBundle && (
                <a
                    href={product?.path}
                    className="flex flex-col lg:bg-primary rounded-xl lg:h-96 p-5 lg:w-[300px] bg-background2 w-full"
                >
                    <div>
                        <div className="flex justify-between items-start">
                            <TopicsDisplayer topics={product?.topics} />
                            <p className="self-end">
                                {priceVariant?.currency === "USD"
                                    ? "$"
                                    : priceVariant?.currency}
                                {priceVariant?.price}
                            </p>
                        </div>
                        <Image
                            {...image}
                            sizes="(max-width: 700px) 200px, 300px"
                            loading="lazy"
                            className="mx-auto"
                        />
                        <h2 className="text-2xl font-bold text-center m-auto w-40">
                            {product?.name}
                        </h2>
                    </div>
                </a>
            )}
        </>
    );
};
