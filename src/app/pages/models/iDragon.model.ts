/**
 * Model returned from de getDragon Query
 * { @link GET_DRAGONS}
 */
export interface iDragon {
    flickr_images: string[];
    name: string;
    type: string;
    active: boolean;
    id: string;
    description: string;
}
