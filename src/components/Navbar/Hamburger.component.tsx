import { handleMenuToggle } from './Menu';

export function HamburgerButton() {
    return (
        <a className="navbar-toggle" onClick={handleMenuToggle} id="isToggle">
            <div className="lines">
                <span />
                <span />
                <span />
            </div>
        </a>
    );
}
