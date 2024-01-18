import { BasketButton } from "./basket-button";
import { Logo } from "./logo";

export const Header = () => {
    return (
        <header className="container flex justify-between mx-auto py-10 w-full">
            <a href="/" title="AstroJS">
                <Logo />
            </a>
            <a href="/cart" title="Your cart">
                <BasketButton />
            </a>
        </header>
    );
};
