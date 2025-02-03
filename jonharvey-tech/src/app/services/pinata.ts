'use server'

import { PinataSDK } from "pinata-web3";

export interface BlogPost {
  id: number;
  title: string;
  mdx: string; // URL to the MDX file
  date: string; // ISO date format (YYYY-MM-DD)
  image: string; // URL to the post's image
  summary: string;
  tags: string[];
}

export interface BlogIndex {
  featured: number[]; // Array of post IDs that are featured
  posts: BlogPost[];
}

const pinata = new PinataSDK({
    pinataJwt: process.env.PINATA_JWT!,
    pinataGateway: process.env.PINATA_GATEWAY,
  });


export const listAllPosts = async () => {
  const postList = await pinata.listFiles().group("047e4bec-d911-49de-a295-102249ac2523");
  if(postList) {
    return postList;
  } else {
    throw new Error('Post list not found');
  }
}

export const listAllMedia = async () => {
  const contentList = await pinata.listFiles().group("85b9e09c-6b63-4118-8e08-94534cd0dba5");
  if(contentList) {
    return contentList;
  } else {
    throw new Error('Content list not found');
  }
}

export const getPostByCID = async (cid: string) => {
  console.log(cid)
    const post = await pinata.gateways.get(cid)
    if(post) {
      if(post.contentType !== 'text/plain'){
        console.log(post.contentType)
        throw new Error('Post is not a text file');
      }
      return post;
    } else {
        throw new Error('Post not found');
    }
}

export const getContentByCID = async (cid: string) => {
    const content = await pinata.gateways.get(cid)
    if(content) {
        return content;
    } else {
        throw new Error('content not found');
    }
}

export const getBlogIndex = async () => {
  
  const postList = await pinata.listFiles().group("dbfa9da7-6563-4b86-a6dd-d2f06aa205e4")
  const index = await pinata.gateways.get(
    postList[0].ipfs_pin_hash
  );

  if (!index) {
    throw new Error("Index not found");
  }

  if (index.data !== null && index.data !== undefined) {
    return index.data as unknown as BlogIndex;
    
  } else {
    throw new Error("Index is empty or invalid");
  }
};

// create functions to list all content in the two groups - blog-media and blog-posts

// create functions to get specific content from those two groups

// store whatever is efficiently doable in stores for fast retrieval via the UI