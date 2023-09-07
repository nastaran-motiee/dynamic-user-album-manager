import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

//TODO: This function is for development purpose only.. delete this function at the end of development.
const pause = async (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const albumsApi = createApi({
    reducersPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),

    endpoints: (builder) => ({
        removeAlbum: builder.mutation({
            invalidatesTags: (result, error, album) => [{ type: 'Album', id: album.userId }],
            query: (album) => {
                return {
                    url: `/albums/${album.id}`,
                    method: 'DELETE'
                };
            }
        }),

        addAlbum: builder.mutation({
            invalidatesTags: (result, error, user) => [{ type: 'Album', id: user.id }],
            query: (user) => {
                return {
                    url: '/albums',
                    method: 'POST',
                    body: {
                        userId: user.id,
                        title: faker.commerce.productName(),
                    }
                };
            }
        }),

        fetchAlbums: builder.query({
            providesTags: (result, error, user) => [{ type: 'Album', id: user.id }],
            query: (user) => {
                return {
                    url: "/albums",
                    params: {
                        userId: user.id
                    },
                    methods: 'GET'
                };
            }
        })

    }),

});


export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };