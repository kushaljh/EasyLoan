const API_BASE = 'https://api.evenfinancial.com';

async function makeFetchCalls(url, data, method) {
    const options = const_options;
    options.body = JSON.stringify(data);
    options.method = method;
    return await fetch(url, options).then(checkStatus);
}

async function checkStatus(response) {
    if (response.ok) {
        return response.text();
    }
    else {
        return Promise.reject(new Error(response.status + ': ' + response.statusText));
    }
}

export async function postLead(leadData) {
    let res;
    console.log(leadData);
    try {
        res = await makeFetchCalls(`${API_BASE}/leads/rateTables`, leadData, 'POST');
    }
    catch (err) {
        throw new Error('Error posting leads');
    }
    return res;
}

export async function getRateTables(uuid) {
    console.log('calling getRateTables');
    let res;
    try {
        res = await makeFetchCalls(`${API_BASE}/leads/rateTables/${uuid}`, 'GET');
    }
    catch (err) {
        throw new Error('Error posting leads');
    }
    return res;
}

const const_options = {
    'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2',
    }
};
