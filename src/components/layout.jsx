import NavigationBar from "./navigationbar";
import Footer from "./footer";


export default function Layout( {children} ){
    

    return(
        <>
            <NavigationBar/>
                {children}
            <Footer/>
        </>
    )
}