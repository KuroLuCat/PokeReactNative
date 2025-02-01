import { View, Text } from 'react-native'
import React from 'react'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import "../global.css"
import { Stack } from 'expo-router'


const RootLayout = () => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  )
}

export default RootLayout