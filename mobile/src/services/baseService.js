import { axiosDefault } from '../utils/clientApi';
import { handleErrors } from '../utils/handleErrors';
import { handleSuccess } from '../utils/handleSuccess';
import { getItem, saveItem } from '../utils/storage'

const axios = axiosDefault();

const getHeaders = async () => {
    const token = await getItem('TOKEN')
    return { Authorization: token ? `Bearer ${token}` : undefined }
}

export const get = async (path) => {
    try {
        const headers = await getHeaders('TOKEN')
        const { data } = await axios.get(path, { headers });
        return handleSuccess(data);
    } catch (error) {
        return handleErrors(error);
    }
};

export const create = async (path, payload) => {
    try {
        const headers = await getHeaders('TOKEN')
        const { data } = await axios.post(path, payload, { headers });
        return handleSuccess(data);
    } catch (error) {
        return handleErrors(error);
    }
};

export const update = async (path, payload) => {
    try {
        const headers = await getHeaders('TOKEN')
        const { data } = await axios.put(path, payload, { headers });
        return handleSuccess(data);
    } catch (error) {
        return handleErrors(error);
    }
};

export const remove = async (path) => {
    try {
        const headers = await getHeaders('TOKEN')
        const { data } = await axios.delete(path, { headers });
        return handleSuccess(data);
    } catch (error) {
        return handleErrors(error);
    }
};
