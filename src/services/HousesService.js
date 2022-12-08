import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HouseService {

    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('[getHouses]', res.data)
        AppState.houses = res.data
    }
}

export const housesService = new HouseService()