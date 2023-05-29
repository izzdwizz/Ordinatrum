import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const CryptoNewsHeader = {
	'X-BingApis-SDK': 'true',
	'X-RapidAPI-Key': 'd8a0b0956bmshafa5a0d938278c9p15b5b0jsne094aab56cd3',
	'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

const createRequest = (url) => ({ url, headers: CryptoNewsHeader });
export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) =>
				createRequest(
					`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
				),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
