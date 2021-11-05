import {useState, useEffect} from 'react';
import {apiRequestWithKey } from '../api/apiRequestWithKey';
import Modules from '../api/Modules';

const API_URL = "https://my.api.mockaroo.com/";
const API_KEY = "?key=c4468d80";

function Myprofile() {
    //properties ---------------------
    //hooks ---------------------
    const [loadingMessage, setLoadingMessage] = useState("Loading records...");
    const [modules, setModules] = useState(null);

    useEffect(() => { fetchModules(); }, []);
    //context ---------------------
    //methods ---------------------
    const fetchModules = async () => {
        const outcome = await apiRequestWithKey(API_URL, API_KEY, 'modules.json');
        if (outcome.success) setModules(outcome.response);
        else setLoadingMessage("Modules could not be found.");
        console.log('outcome', outcome)
    }
    //view ---------------------
    return (
        <section>
            <h1>My Profile</h1>
            <h2>All Modules</h2>
            {
                !Modules
                    ? <p>{loadingMessage}</p>
                    : <Modules list = {modules}/>
            }
        </section>
    );
}

export default Myprofile;