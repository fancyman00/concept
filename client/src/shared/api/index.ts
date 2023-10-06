import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const appApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:1337/api' }),
    endpoints: () => ({}),
})
export default appApi