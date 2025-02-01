import { pokeApi } from "@/core/api/poke-api";
// import { RegionResponse } from "@/infraestructure/interfaces/region/region-response";
import { RegionMapper } from "@/infraestructure/mappers/region/region.mapper";

export const regionActions = async () => {
    try {

        const { data } = await pokeApi.get('/region')

        const regions = data.results.map(RegionMapper.fromRegionToRegion)

        console.log(regions);

        return regions;

    } catch (error) {
        console.log(error);
        throw 'Cannot load region';
    }
}