import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const albumsApi = createApi({
    reducersPath: "albums",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
    endpoints: (builder) => ({
        fetchAlbums: builder.query({
            query: (user) => {
                return {
                    url: "/albums",
                    params: {
                        userId: user.id
                    },
                    methods: 'GET'
                }
            }
        })

    }),

});


export const {useFetchAlbumsQuery} = albumsApi;
export { albumsApi };