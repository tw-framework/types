import { GameData } from "./game_data";

declare global {
    interface Window {
        game_data: GameData;
    }
}
export {}