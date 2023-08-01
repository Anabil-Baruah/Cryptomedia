import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import env from '../env';
// const cryptoApiHeaders = {
//     'X-RapidAPI-Key': '87dc528461msh0f67c1ab97b2215p14ba8djsn79b6c7a8e07d',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// }

const baseUrl = 'https://coinranking1.p.rapidapi.com'

// const createRequest = (url) => ({ url, Headers: cryptoApiHeaders })
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com')
            headers.set('X-RapidAPI-Key', env.REACT_APP_API_KEY)
            return headers
        },
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`,
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => `/coin/${coinId}`
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => `coin/${coinId}/history?timeperiod=${timeperiod}`
        })
    }),
})


export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi
