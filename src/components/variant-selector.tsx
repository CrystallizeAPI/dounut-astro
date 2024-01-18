import type { ProductVariant } from "@crystallize/js-api-client";
import { isEqual } from "../use-cases/utils";

function reduceAttributes(variants: any[]) {
    return variants.reduce((acc, variant) => {
        const attrs = acc;
        variant.attributes.forEach(
            ({ attribute, value }: { attribute: any; value: any }) => {
                const currentAttribute = attrs[attribute];
                if (!currentAttribute) {
                    attrs[attribute] = [value];
                    return;
                }

                const valueExists = currentAttribute.find(
                    (str: string) => str === value
                );
                if (!valueExists) {
                    attrs[attribute].push(value);
                }
            }
        );

        return attrs;
    }, {});
}

function attributesToObject({ attributes }: any) {
    return Object.assign(
        {},
        ...attributes.map(
            ({ attribute, value }: { attribute: any; value: any }) => ({
                [attribute]: value,
            })
        )
    );
}

export const VariantSelector = ({
    variants,
    selectedVariant,
    onVariantChange,
}: {
    variants: ProductVariant[];
    selectedVariant: ProductVariant;
    onVariantChange: (variant: any) => void;
}) => {
    const attributes = reduceAttributes(variants);

    function onAttributeSelect({
        attribute,
        value,
        e,
    }: {
        attribute: any;
        value: any;
        e: any;
    }) {
        const selectedAttributes = attributesToObject(selectedVariant);

        selectedAttributes[attribute] = value;
        // Get the most suitable variant
        let variant = variants.find((variant) => {
            if (isEqual(selectedAttributes, attributesToObject(variant))) {
                return true;
            }
            return false;
        });

        if (variant) {
            onVariantChange(variant);
        }
    }

    return (
        <div>
            {Object.keys(attributes).map((attribute) => {
                const attr = attributes[attribute];
                const selectedAttr = selectedVariant.attributes?.find(
                    (a: any) => a.attribute === attribute
                );

                if (!selectedAttr) {
                    return null;
                }

                return (
                    <div key={attribute} className="w-40">
                        <p className="my-3 text-text font-semibold">
                            {attribute}
                        </p>
                        <div className="flex justify-between mb-5">
                            {attr.map((value: string) => (
                                <button
                                    key={value}
                                    onClick={(e) =>
                                        onAttributeSelect({
                                            attribute,
                                            value,
                                            e,
                                        })
                                    }
                                    type="button"
                                    className="bg-white drop-shadow-sm w-30 px-3 py-2 rounded-sm text-text font-semibold"
                                    style={{
                                        border:
                                            value === selectedAttr.value
                                                ? "3px solid #373567"
                                                : "3px solid transparent",
                                    }}
                                >
                                    {value}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
