import { createClient } from "contentful"

export const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  host: process.env.REACT_APP_HOST,
})

// const getProjects = async () => {
//   try {
//     const response = await client.getEntries()
//     dispatch({
//       type: "GET_PROJECTS",
//       payload: response.items,
//     })
//   } catch (error) {
//     if (error) {
//       console.log(error)
//     }
//   }
// }
