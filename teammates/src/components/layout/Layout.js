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
            <div className='underlay'>
                <main>
                    {props.children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;