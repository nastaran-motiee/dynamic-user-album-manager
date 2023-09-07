import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
    endpoints: (builder) => ({

        fetchPhotos: builder.query({}),
        addPhoto: builder.mutation({}),
        removePhoto: builder.mutation({})
    })
}
);

export { createApi };