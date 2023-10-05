import {
    GridRenderer,
    GridRenderingType,
} from "@crystallize/reactjs-components";
import { GridItem } from "./grid-item";

export const Grid = ({ grid }: { grid: any }) => {
    return (
        <div>
            <GridRenderer
                grid={grid?.content?.grids?.[0]}
                type={GridRenderingType.Div}
                cellComponent={({ cell, index }: any) => {
                    return <GridItem cell={cell} key={index} />;
                }}
                style={{
                    gridGap: "1rem",
                }}
            />
        </div>
    );
};
