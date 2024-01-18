import { Image } from "@crystallize/reactjs-components";
import { TopicsDisplayer } from "../topics-displayer";
import type { CellProps } from "../../use-cases/contracts/Cell";

export const GridItem = ({ cell }: CellProps) => {
    return cell.layout.colspan === 3 ? (
        <a href={cell.item?.path}>
            <div className="flex relative lg:flex-row flex-col">
                <Image
                    {...(cell.item?.variants?.[0]?.images?.[0] as any)}
                    sizes="(max-width: 700px) 300px, 500px"
                    className="lg:absolute lg:top-0 bottom-0 lg:right-0 lg:w-8/12 overflow-hidden rounded-r-xl"
                />
                <div className="flex flex-col justify-evenly lg:w-128 px-5 bg-background1 h-80 p-5 rounded-xl w-full lg:items-start items-center">
                    <div className="w-60 lg:text-left text-center">
                        <h2 className="text-2xl font-bold">
                            {cell.item?.name}
                        </h2>
                        <p className="mt-4">${cell.item?.variants[0]?.price}</p>
                    </div>
                    <TopicsDisplayer topics={cell.item?.topics} />
                </div>
            </div>
        </a>
    ) : (
        <a href={cell.item.path}>
            <div className="flex flex-col bg-background3 px-5 py-7 rounded-xl xl:h-[600px] p-5  w-full h-auto min-h-[400px]">
                <div className="flex justify-between items-start">
                    <TopicsDisplayer topics={cell.item.topics} />
                    <p className="self-end">${cell.item.variants[0]?.price}</p>
                </div>
                <Image
                    {...(cell.item?.variants?.[0]?.images?.[0] as any)}
                    sizes="(max-width: 700px) 200px, 300px"
                    loading="lazy"
                    className="mx-auto"
                />
                <h2 className="text-2xl font-bold text-center w-40 m-auto">
                    {cell.item.name}
                </h2>
            </div>
        </a>
    );
};
