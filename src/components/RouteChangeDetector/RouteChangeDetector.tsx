import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { closeMenu } from '../Navbar/Menu';

interface Props {
    routeChange: (activeRoute: string) => void;
}

const RouteChangeDetector = ({ routeChange }: Props) => {
    const location = useLocation();

    useEffect(() => {
        const currentRoute: string = location.pathname
            .split('/')
            .join('')
            .toUpperCase();
        const isChildRoute = location.pathname.includes('/profile/');

        if (!isChildRoute) {
            window.scroll(0, 0); // scroll window to top when route changes
            closeMenu();
        }

        routeChange(currentRoute);
    }, [location]);

    return <></>;
};

export default RouteChangeDetector;
