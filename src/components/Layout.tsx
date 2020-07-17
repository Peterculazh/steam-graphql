import Header from './Header';
import Footer from './Footer';

interface ILayout {
    children: any;
}


const Layout = (props: ILayout) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout;