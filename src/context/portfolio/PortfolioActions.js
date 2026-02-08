import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// make API call to Contentful
export const getProjects = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "project",
    });
    return { projects: entries.items };
  } catch (error) {
    console.log(error.message);
  }
};

export const getBlogPosts = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
    });
    return { blogPosts: entries.items };
  } catch (error) {
    console.log(error.message);
  }
};

export const getEvents = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "talks",
    });
    return { events: entries.items };
  } catch (error) {
    console.log(error.message);
  }
};

export const getAwards = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "awards",
    });
    return { awards: entries.items };
  } catch (error) {
    console.log(error.message);
  }
};