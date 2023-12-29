import { DragonXSpaceApiResponse, LocalDragon } from '../../models/dragon.model';
import { API_SPACE_X_DRAGONS } from '../../api-constants';

/**
 * Retrieves Dragon info and tranforms to match our requiremnts.
 *
 * @param parent Information of the parent object.
 * @param args Input given by the user.
 * @returns `Promise` of our Dragon model.
 */
export async function getDragons(parent: any, args: any): Promise<LocalDragon[]> {
    return fetchDragons();
}

/**
 * @description Dispatches an API GET call from the SPACE X public API,
 * if some more information it's needed about how it works, or there is any
 * problem visit @see https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs
 * 
 * @returns a `Promise` of a Dragon that depends on the space X model.
 */
async function fetchDragons(): Promise<DragonXSpaceApiResponse[]>{
    try {
        const response = await fetch(API_SPACE_X_DRAGONS, {method: 'GET', credentials: 'omit'});

        if (!response || response.status !== 200) {
            //TODO: Create an error codes dictionary so we can have a better error handling on the FE.
            throw new Error('Failed to retrieve information');
        }

        return await response.json();

    } catch(e) {
        throw e;
    }
}
