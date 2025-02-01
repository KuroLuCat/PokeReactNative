import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useRegion } from '@/presentation/hooks/useRegion'
import MainSlideShow from '@/presentation/components/region/MainSlideShow';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();
    const { regionQuery } = useRegion();

    if (regionQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='purple' size={30} />
            </View>
        )
    }

    return (
        <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
            <Text className='text-3xl font-bold px-4 mb-2'>PokeApp</Text>
            <MainSlideShow regions={regionQuery.data ?? []} />
        </View>
    )
}

export default HomeScreen