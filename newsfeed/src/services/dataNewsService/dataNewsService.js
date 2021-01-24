import { get } from 'lodash';
import axios from 'axios';
import { dataNewsServiceOperationType } from './dataNewsServiceOperationType';

const dataNewsProviderConfig = {
    auth: {
        apiKey: '09wicv2sjsax89zuxnz23enzr',
    },
    api: {
        port: 443,
        protocol: 'http',
        host: 'api.datanews.io/v1',
        [dataNewsServiceOperationType.GET_HEADLINES]: {
            verb: 'GET',
            endpoint: '/headlines',
        }

    }
};

const getDataNewsApiProperties = (dataNewsProviderConfig) => {
    const host = get(dataNewsProviderConfig, 'api.host'); 
    const endpoint = get(dataNewsProviderConfig, `api.${dataNewsServiceOperationType.GET_HEADLINES}.endpoint`)
    const auth = get(dataNewsProviderConfig, 'auth.apiKey');
    const url = `${host}${endpoint}`;
    
    return {
        url, 
        auth,
    }
}

export const getHeadlinesFromDataNewsApi = () => {
    const { url, auth } = getDataNewsApiProperties(dataNewsProviderConfig) || {};
    return axios.get(`http://${url}?apiKey=${auth}`)
        .then(response => response)
        .catch(error => console.log(error));
};