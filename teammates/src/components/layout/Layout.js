import Header from './Header';


function Layout(props) {
    //properties ---------------------
    //hooks ---------------------
    //context ---------------------
    //methods ---------------------
    //view ---------------------
    return (
        <>
            <Header />
            <div>
                {props.children}
            </div>
        </>
    )
}

export default Layout;