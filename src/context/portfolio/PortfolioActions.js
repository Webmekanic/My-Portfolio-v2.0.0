import { createClient } from "contentful"

export const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
})

export const getProjects = async () => {
  console.log(client)
  try {
    const entries = await client.getEntries()

    const sanitizedEntries = entries.items.map((item) => {
      const avatar = item.fields.avatar.fields

      return {
        ...item.fields,
        avatar,
      }
    })

    return { projects: sanitizedEntries }
  } catch (error) {
    if (error) {
      console.log(error.message)
    }
  }
}
