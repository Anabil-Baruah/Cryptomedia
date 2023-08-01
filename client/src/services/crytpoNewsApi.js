import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import env from '../env';
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': env.BING_NEWS_API,
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl,
//         prepareHeaders: (headers) => {
//             headers.set('X-BingApis-SDK', 'true')
//             headers.set('X-RapidAPI-Key', '87dc528461msh0f67c1ab97b2215p14ba8djsn79b6c7a8e07d')
//             headers.set('X-RapidAPI-Host', 'bing-news-search1.p.rapidapi.com')
//             return headers
//         },
//     }),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: ({ newsCategory, count }) => `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
//         }),
//     }),
// })

// export const {
//     useGetCryptoNewsQuery
// } = cryptoNewsApi

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;