import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const appApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.88.25:1337/api' }),
    endpoints: () => ({}),
})
export default appApi