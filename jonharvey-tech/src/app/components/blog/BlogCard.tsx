import Link from 'next/link';
import { BlogPost } from '@/app/services/pinata';

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  // pinata doesn't provide metadata when fetching the individual files themselves,
  // it's only when fetching via .list(), which can be passed a name filter, group filter
  // so blog posts themselves need to have metadata embedded or need the metadata
  // passed in url params or stored in state.

  // metadata is where I would store any blog category tags, author info, maybe even
  // image urls for the blog card or thumbnails

  // This may or may not need to happen from a server instead of direct uploads, still researching

  return (
    <div className=''>
      <li
        key={blog.id}
        className='border border-white rounded-3xl flex flex-col min-h-20 w-full my-4'
      >
        <Link className="className='relative block w-full h-64 rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105" href={`/blog/${blog.mdx.split("ipfs/")[1]}`}>
          
            <img
              src={blog.image}
              alt={''}
              className='absolute inset-0 w-full h-full object-cover'
            />

            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>

            {/* Content Layer */}
            <div className='absolute bottom-0 left-0 w-full p-4 text-white'>
              <h3 className='text-3xl text-left break-all font-semibold'>{blog.title}</h3>
              <p className='text-sm text-left opacity-80'>{new Date(blog.date).toLocaleDateString()}</p>
            </div>
          
        </Link>
      </li>
    </div>
  );
};

export default BlogCard;
