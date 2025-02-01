import { regionActions } from "@/core/actions/region/region.action"
import { useQuery } from "@tanstack/react-query"

export const useRegion = () => {
    const regionQuery = useQuery({
        queryKey: ['regions', 'region'],
        queryFn: regionActions,
        staleTime: 1000 * 60 * 60 * 24,
    })

    return {
        regionQuery
    }
}