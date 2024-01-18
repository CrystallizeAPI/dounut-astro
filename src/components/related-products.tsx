import { Image } from "@crystallize/reactjs-components";
import type { RelatedItem } from "../use-cases/contracts/RelatedItem";

export const RelatedProducts = ({
    related,
}: {
    related: { content: { items: RelatedItem[] } };
}) => {
    return (
        <div className="flex w-full items-start flex-wrap gap-1">
            {related?.content?.items.map((item, index: number) => (
                <a
                    href={item.path}
                    key={index}
                    className="bg-primary px-4 py-3 rounded-xl border-2 border-grey  flex flex-col lg:bg-primary  lg:h-96 p-5 lg:w-[300px]  w-full"
                >
                    <div className="flex justify-between">
                        <div className="flex gap-1">
                            {item.topics?.map((topic) => (
                                <div
                                    className="text-sm bg-grey px-2 py-1 rounded-2xl"
                                    key={topic.name}
                                >
                                    {topic.name}
                                </div>
                            ))}
                        </div>
                        <div>${item.defaultVariant?.price}</div>
                    </div>
                    <Image
                        {...item.defaultVariant?.firstImage}
                        sizes="300px"
                        loading="lazy"
                    />
                    <h2 className="text-l text-center m-auto self-end">
                        {item.name}
                    </h2>
                </a>
            ))}
        </div>
    );
};
