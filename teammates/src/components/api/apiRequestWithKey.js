export async function apiRequestWithKey(apiURL, key, endpoint, method = "GET", body=null) {
    //Build fetch parameters
    let requestObj = {method: method}; //GET, POST, PUT, DELETE, etc.
    if (body) requestObj = {...requestObj, body: body};

    //Call API and return response object
    const address = apiURL + endpoint + key;
    const response = await fetch(address, requestObj);
    if ((response.status >= 200) && (response.status <= 299))
        return {success: true, response: await response.json() };
        else return {success: false, response: response }; 
}