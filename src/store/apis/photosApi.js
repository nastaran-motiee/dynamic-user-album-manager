import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      providesTags: (result, error, album) => {
        const tags = result.map((photo) => {
          return { type: "Photo", id: photo.id };
        });
        tags.push({ type: "AlbumPhoto", id: album.id });
        return tags;
      },
      query: (album) => ({
        url: "/photos",
        method: "GET",
        params: {
          albumId: album.id,
        },
      }),
    }),

    addPhoto: builder.mutation({
      invalidatesTags: (result, error, album) => {
        return [{ type: "AlbumPhoto", id: album.id }];
      },
      query: (album) => ({
        url: "/photos",
        method: "POST",
        body: {
          albumId: album.id,
          url: faker.image.url(150, 150, true),
        },
      }),
    }),

    removePhoto: builder.mutation({
      invalidatesTags: (result, error, photo) => {
        return [{ type: "Photo", id: photo.id }];
      },
      query: (photo) => ({
        url: `/photos/${photo.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
export { photosApi };
