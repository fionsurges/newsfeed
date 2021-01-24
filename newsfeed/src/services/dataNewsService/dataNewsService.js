import config from 'config';
import { get } from 'lodash';
import axios from 'axios';
import { dataNewsServiceOperationType } from './dataNewsServiceOperationType';

const dataNewsProviderConfig = config.get('dataNewsProviderConfig');
console.log(dataNewsProviderConfig);

const getDataNewsApiProperties = (dataNewsProviderConfig) => {
    const method = get(dataNewsProviderConfig, `${dataNewsServiceOperationType.GET_HEADLINES}.verb`)
    const protocol = get(dataNewsProviderConfig, 'api.protocol');
    const host = get(dataNewsProviderConfig, 'api.host'); 
    const endpoint = get(dataNewsProviderConfig, `${dataNewsServiceOperationType.GET_HEADLINES}.endpoint`)
    const auth = get(dataNewsProviderConfig, 'auth.apiKey');
    
    const url = `${protocol}${host}${endpoint}`;
    return {
        url,
        method,
        auth,
    }
}


export const getHeadlinesFromDataNewsApi = (getDataNewsApiProperties) => {
    const url = get(getDataNewsApiProperties, 'url');
    const method = get(getDataNewsApiProperties, 'method');
    
    axios({
        method,
        url,
        headers: {
            'api-key': auth
            }
    })
    .then(response => console.log('response', response));
};