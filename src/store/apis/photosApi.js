import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";


const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
    endpoints: (builder) => ({

        fetchPhotos: builder.query({
            query: (album) => ({
                url: '/photos',
                method: 'GET',
                params: {
                    albumId: album.id
                }


            }),
        }),

        addPhoto: builder.mutation({
            query: (album) => ({
                url: '/photos',
                method: 'POST',
                body: {
                    albumId: album.id,
                    url: faker.image.url(150, 150, true)
                }
            })
        }),

        removePhoto: builder.mutation({
            query: (photo) => (
                {
                    url: `/albums/${photo.id}`,
                    method: 'DELETE'
                }
            )
        })
    })
}
);

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
export { photosApi };