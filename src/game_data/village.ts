import { Bonus } from './bonus';
import { Buildings } from "./building";

export interface Village {
    bonus: Bonus;
    // bonus_id
    buildings: Buildings;
    coord: string;
    display_name: string;
    id: number;
    iron: number;
    iron_float: number;
    iron_prod: number;
    is_farm_upgradable: boolean;
    last_res_tick: number;
    modifications: number;
    name: string;
    player_id: number;
    points: number;
    pop: number;
    pop_max: number;
    stone: number;
    stone_float: number;
    stone_prod: number;
    storage_max: number;
    trader_away: number;
    wood: number;
    wood_float: number;
    wood_prod: number;
    x: number;
    y: number;
}
