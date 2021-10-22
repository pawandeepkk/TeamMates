import Header from './Header';
import Navbar from './Navbar';

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
        </>
    )
}

export default Layout;