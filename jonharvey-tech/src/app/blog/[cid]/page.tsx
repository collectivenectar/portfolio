'use server';
import { getContentByCID } from '../../services/pinata';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { YouTubeVid } from '../../components/blog/mdx/Embeds';

import BlogHeader from '../../components/blog/layout/BlogHeader';
import BlogFooter from '../../components/blog/layout/BlogFooter';

function MyReactComponent() {
  return (
    <div className='bg-blue-500 text-white p-4 rounded-lg'>
      Hello, I’m a React component rendered in MDX!
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  let MDXContent = null;
  let content = null;
  let cid = (await params).cid;
  try {
    if (typeof cid !== 'string') {
      throw new Error('Invalid CID');
    }

    // Fetch the content using the CID
    content = await getContentByCID(cid);
    if (content && content.data) {
      const mdxSource = content.data.toString();
      if (mdxSource) {
        // compile to function body
        const code = String(
          await compile(mdxSource, {
            outputFormat: 'function-body',
          })
        );

        // run the code with runtime and get default export
        const { default: MDXComponent } = await run(code, {
          ...runtime,
          baseUrl: import.meta.url,
        });

        MDXContent = MDXComponent;
      } else {
        throw new Error('No MDX source found in content');
      }
    } else {
      throw new Error('Failed to fetch content');
    }
  } catch (err) {
    console.error('Error fetching or rendering MDX:', err);
    return <p>Error fetching post</p>; // Return an error message if fetching fails
  }

  // If mdxContent is still null, return an error message
  if (!MDXContent) {
    return <p>No content found for CID</p>;
  }

  return (
    <div className='prose prose-invert text-white px-4 md:w-5/6 md:mx-auto'>
      <BlogHeader />
      <MDXContent components={{ MyReactComponent, YouTubeEmbed: YouTubeVid }} />
      <BlogFooter
        date={''}
        author={{
          name: 'Jon Harvey',
          image: '/images/jonharvey.PNG',
          bio: 'Jon Harvey is a full stack developer based out of southern California, but works as a digital nomad in the western hemisphere. He is also a musician and a writer.',
        }}
        prevPost={{
          title: '',
          hash: '',
        }}
        nextPost={{
          title: '',
          hash: '',
        }}
      />
    </div>
  );
}
