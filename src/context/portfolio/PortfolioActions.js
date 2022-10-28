import { createClient } from "contentful"

export const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  host: process.env.REACT_APP_HOST,
})

export const getProjects = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "Project",
      select: "false",
    })

    return { projects: entries }
  } catch (error) {
    if (error) {
      console.log(error.message)
    }
  }
}
