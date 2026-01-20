import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Riporta lo scroll in cima alla pagina
        window.scrollTo(0, 0);
    }, [pathname]); // Si attiva ogni volta che il percorso (URL) cambia

    return null;
}

export default ScrollToTop;