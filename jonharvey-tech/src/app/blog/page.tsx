'use server'
import { listAllPosts } from '../services/pinata'; // Fetch metadata for all posts
import Link from 'next/link';
import dynamic from 'next/dynamic';

import BlogCard from '../components/blog/BlogCard';

// import HeroCarousel from './HeroCarousel';


export default async function BlogLandingPage() {
  const posts = await listAllPosts();
  if (!posts || posts.length === 0) {
    return <p>No blog posts available.</p>;
  }

  // const carouselPosts = posts.slice(0, 5); // Limit to top 5 posts for the carousel
  const recentPosts = posts.slice(0, 5);

  return (
    <div className="w-full h-fit">
      {/* Image Carousel */}
      {/* <HeroCarousel posts={carouselPosts} /> */}

      {/* List of Recent Posts */}
      <div className="w-full h-screen">
        <ul className="px-4">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} blog={post} />
          ))}
        </ul>
      </div>
    </div>
  );
}