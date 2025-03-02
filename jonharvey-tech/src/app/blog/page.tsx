'use client';
import {
  getBlogIndex,
  BlogPost,
} from '../services/pinata'; // Fetch metadata for all posts
import dynamic from 'next/dynamic';

import { useEffect, useState } from 'react';

import BlogCard from '../components/blog/BlogCard';

// import HeroCarousel from './HeroCarousel';

export default function BlogLandingPage() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const index = await getBlogIndex();
      if (index) {
        const posts = index.posts;
        setPosts(posts);
      }
    };
    fetchPosts();
  }, []);

  if (!posts) {
    return (
      <div className='w-full h-screen text-white font-Outfit text-center text-3xl mt-12'>
        <div className='w-full h-fit text-white font-Outfit text-center text-3xl mt-12'>
        Latest Posts
        <ul className='px-4 md:w-2/3 mx-auto pt-20'>
          {[...Array(5)].map((_, index) => (
              <li
              key={index}
              className='border border-white rounded-3xl w-full my-4 animate-pulse'
            >
              <div className='relative block w-full h-64 rounded-2xl overflow-hidden shadow-lg'>
                <div className='absolute inset-0 w-full h-full bg-gray-300'></div>
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
                <div className='absolute bottom-0 left-0 w-full p-4 text-white'>
                  <div className='h-8 bg-gray-400 rounded w-3/4 mb-2'></div>
                  <div className='h-4 bg-gray-400 rounded w-1/4'></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </ div>
      </div>
    );
  }

  if (posts.length === 0) {
    return <p>No blog posts available.</p>;
  }
  return (
    <div className='w-full h-fit'>
      {/* Image Carousel */}
      {/* <HeroCarousel posts={carouselPosts} /> */}

      {/* List of Recent Posts */}
      <div className='w-full h-fit text-white font-Outfit text-center text-3xl mt-12'>
        Latest Posts
        <ul className='px-4 md:w-2/3 mx-auto pt-20'>
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              blog={post}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
