import { dataNewsServiceOperationType } from './src/services/dataNewsServiceOperationType';

export const dataNewsProviderConfig = {
    auth: {
        apiKey: '09wicv2sjsax89zuxnz23enzr',
    },
    api: {
        port: 443,
        protocol: 'http',
        host: 'api.datanews.io',
        [dataNewsServiceOperationType.GET_HEADLINES]: {
            verb: 'GET',
            endpoint: '/headlines',
        }

    }
};