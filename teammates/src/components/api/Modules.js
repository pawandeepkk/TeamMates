
function Modules({list = []}) {
    //properties ---------------------
    //hooks ---------------------
    //context ---------------------
    //methods ---------------------
    const renderList = () => (
        list.map(item => <div key={item.ModuleID}>
            <ul>
                <li>{item.ModuleName}</li>
                <li>{item.ModuleCode}</li>
                <li>{item.ModuleLevel}</li><br/>
            
            </ul>
        </div>)
    )
    //view ---------------------


    return (
        <>
            {
                list?.length > 0 && renderList()
            }
        </>
    )
}

export default Modules;