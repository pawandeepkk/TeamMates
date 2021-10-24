import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

function Layout(props) {
    //properties ---------------------
    //hooks ---------------------
    //context ---------------------
    //methods ---------------------
    //view ---------------------
    return (
        <>
            <Header />
            <Navbar />
            <div>
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;