import { RegionResponse, Result } from "@/infraestructure/interfaces/region/region-response";
import { Region } from "@/infraestructure/interfaces/region/region.interface";


export class RegionMapper {
    static fromRegionToRegion = (region: Result): Region => {
        return {
            // id: region.id,
            name: region.name,
            url: region.url

        }
    }
}