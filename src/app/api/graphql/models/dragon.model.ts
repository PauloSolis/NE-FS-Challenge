export interface LocalDragon {
    name: string;
    type: string;
    active: boolean;
    id: string;
    flickr_images: string[];
    description: string;
}

// #region Response models for X space dragons' API

export interface DragonXSpaceApiResponse {
    heat_shield: HeatShield;
    launch_payload_mass: Mass;
    launch_payload_vol: Volume;
    return_payload_mass: Mass;
    return_payload_vol: Volume;
    name: string;
    type: string;
    active: boolean;
    id: string;
    flickr_images: string[];
    description: string;
}

export interface HeatShield {
    material: string;
    size_meters: number;
    temp_degrees: 3000;
    dev_partner: string;
}

export interface Mass {
    kg: number;
    lb: number;
}

export interface Volume {
    cubic_meters: number;
    cubic_feet: number;
}

// TODO: finish the missing interfaces

// #endregion Response models for X space dragons' API
