import { Image } from "@crystallize/reactjs-components";
import { ProductCard } from "./product-card";

export const Products = ({ donuts }: any) => {
  return (
    <div className="mt-20">
      <p className="text-lg font-semibold mb-10">Our do(u)nuts</p>
      <div className="flex flex-wrap gap-5">
        {donuts?.children?.map((donut: any, index: number) =>
          <ProductCard product={donut} key={index} />
        )}
      </div>
    </div>
  );
};
