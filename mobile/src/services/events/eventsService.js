import { get, create, update, remove } from '../baseService';
import { toRequest, toModel, toModels } from '../../converters/events/eventsConverter'

export const getEvents = async () => {
    const response = await get('/events/public/list')
    if (response.success) {
        return {
            data: toModels(response.data.events),
            success: true
        }
    }

    return response
};