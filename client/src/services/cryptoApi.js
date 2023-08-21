import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const fetchCrypto_apiKey = import.meta.env.VITE_APP_REACT_APP_API_KEY

const baseUrl = 'https://coinranking1.p.rapidapi.com'

// const createRequest = (url) => ({ url, Headers: cryptoApiHeaders })
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com')
            headers.set('X-RapidAPI-Key', fetchCrypto_apiKey)
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
        }),
        getFavourites: builder.query({
            query: (uuids) => {
                if (uuids.length === 0) {
                    return [];
                } else {
                    return `/coins?uuids=${uuids.join(',')}`;
                }
            }
        })
         
    }),
})


export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetFavouritesQuery
} = cryptoApi
