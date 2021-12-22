import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Toaster} from "react-hot-toast";
function MyApp({Component, pageProps}) {
    return (
        <>
            <Toaster position={'bottom-right'}/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
