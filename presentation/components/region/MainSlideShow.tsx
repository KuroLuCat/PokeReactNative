import { View, Text, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import { Region } from '@/infraestructure/interfaces/region/region.interface'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

interface Props {
    regions: Region[];
}

const MainSlideShow = ({ regions }: Props) => {

    const ref = useRef<ICarouselInstance>(null);
    const width = useWindowDimensions().width;

    return (
        <View className='h-[250px] w-full mt-96'>
            <Carousel
                ref={ref}
                data={regions}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                width={200}
                height={350}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                mode='parallax'
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                defaultIndex={1}
            />
        </View>
    )
}

export default MainSlideShow