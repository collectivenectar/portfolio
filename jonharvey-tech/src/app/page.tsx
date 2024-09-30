'use client';
import styles from './page.module.css';

import { useState } from 'react';

import Story from '../components/Story';

const about = {
  1: 'As a full stack developer with a background in creative media, I help companies and organizations around the world connect with their audience and grow their business. I use industry standard cloud services and modern software tools to deliver your product faster and more efficiently than the competition.',
  2: "Since 2020, I've been providing IT business solutions, applying my media expertise to offer enhanced user experiences. I specialize in crafting the user's journey, underpinned by rigorous market research, usability testing, principles of interactive design, visual composition, and art theory.",
};

const services = {
  1: {
    title: 'Custom Applications',
    description:
      'Tailored solutions based on your specific needs, whether you need a CRM, a content management system, or an online shop.',
    image: '/images/custom-applications.png',
  },
  2: {
    title: 'UI/UX',
    description:
      'Enhance the usability and aesthetic appeal of your existing applications, or plan out the one you want to build.',
    image: '/images/ux-research.png',
  },
  3: {
    title: 'Scalability',
    description:
      'Make sure your application can handle significant growth without performance issues.',
    image: '/images/scalability.png',
  },
  4: {
    title: 'Integration Services',
    description:
      'Add tools and services with third-parties, like payment gateways, social media content, or analytics tools.',
    image: '/images/system-integration.png',
  },
  5: {
    title: 'Maintenance &  Optimization',
    description:
      'Provide ongoing support to optimize application performance, update features, and ensure security compliance.',
    image: '/images/maintenance.png',
  },
};

const toolset = {
  react: '/icons/react.svg',
  typescript: '/icons/typescript.svg',
  javascript: '/icons/javascript.svg',
  redux: '/icons/redux.svg',
  python: '/icons/python.svg',
  express: '/icons/express.svg',
  nodejs: '/icons/nodejs.svg',
  nextjs: '/icons/nextjs.svg',
  heroku: '/icons/heroku.svg',
  postgresql: '/icons/postgresql.svg',
  mongodb: '/icons/mongodb.svg',
  aws: '/icons/aws.svg',
  tanstack: '/icons/tanstack.png',
  zustand: '/icons/zustand.png',
  jest: '/icons/jest.svg',
  postman: '/icons/postman.svg',
  eslint: '/icons/eslint.svg',
  prettier: '/icons/prettier.png',
  vitejs: '/icons/vitejs.svg',
  netlify: '/icons/netlify.svg',
  asana: '/icons/asana.png',
  trello: '/icons/trello.svg',
  git: '/icons/git.svg',
  github: '/icons/github.svg',
  bash: '/icons/bash.svg',
  kde: '/icons/kde.svg',
  figma: '/icons/figma.svg',
  photoshop: '/icons/photoshop.svg',
  css3: '/icons/css3.svg',
  tailwindcss: '/icons/tailwindcss.svg',
  sass: '/icons/sass.svg',
  wordpress: '/icons/wordpress.svg',
  ubuntu: '/icons/ubuntu.svg',
  vscode: '/icons/vscode.svg',
};

export default function Home() {
  const [hoveredTool, updateHoveredTool] = useState<string>('');

  const switchDisplayedTool = (currentTool: string) => {
    updateHoveredTool(currentTool);
  };

  return (
    <div className='flex-col h-full justify-start text-white'>
      {/* HERO */}
      <section className='w-full min-h-fit p-0 text-white'>
        <h1 className='text-8xl ml-72 mr-20 mb-2 mt-56'>launch it.</h1>
        <p className='text-1xl ml-72'>
          full stack web development, brand strategy, multimedia production
        </p>
        <div className='w-full ml-72 mt-16 mb-72 h-20 flex flex-row gap-x-12 justify-start'>
          <button className='border-white border-2 rounded-3xl h-10 bg-black hover:bg-white hover:text-black w-40 text-lg'>
            start now
          </button>
          <button className='border-white border-2 rounded-3xl h-10 bg-black hover:bg-white hover:text-black w-40 text-lg'>
            learn more
          </button>
        </div>
      </section>
       {/* STORY */}
       <section className='h-fit '>
          <Story />
      </section>
      {/* ABOUT */}
      <section className='min-h-fit'>
        <div className='w-full h-fit flex flex-col justify-between items-center pt-5 text-2xl mb-64'>
          <div className='w-11/12 flex flex-row items-center gap-20 self-baseline pl-20 pr-20 ml-16'>
            <div className='w-8/12'>{about[1]}</div>
            <img
              className='max-w-96 max-h-96 bg-gray-900 rounded-xl mt-36'
              src='/images/jonharvey-nb.png'
              alt=''
            />
          </div>
          <div className='w-11/12 flex -mt-20 flex-row items-center gap-20 self-end pr-20 pl-20 mt-20'>
            <img
              className='max-w-96 max-h-96 min-w-96 min-h-96 mb-40 -ml-10'
              src=''
              alt=''
            />
            <div className='w-8/12 text-right mr-20'>{about[2]}</div>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className='min-h-92vh'>
        <div className='h-96 flex flex-col justify-around'>
          <h2 className='text-center text-6xl text-white'>
            what can I do for you?
          </h2>
        </div>
        <div className='flex flex-col justify-between w-full min-h-92vh items-center'>
          <div className='w-10/12 p-20 flex flex-row justify-between self-start'>
            <div className='w-50% flex flex-col justify-center mr-20'>
              <span className='max-w-full text-5xl'>{services[1].title}</span>
              <p className='text-2xl mt-10'>{services[1].description}</p>
            </div>
            <img
              src={services[1].image}
              alt='test'
              className='block w-96 h96'
            />
          </div>
          <div className='w-10/12 p-20 flex justify-between flex-row-reverse self-end'>
            <div className='w-50% flex flex-col justify-center ml-20'>
              <span className='max-w-full text-5xl'>{services[2].title}</span>
              <p className='text-2xl mt-10'>{services[2].description}</p>
            </div>
            <img
              src={services[2].image}
              alt=''
              className='block w-96 h-96'
            />
          </div>
          <div className='w-10/12 p-20 flex flex-row justify-between self-start'>
            <div className='absolute w-105% h-120% -mt-2rem -ml-2rem mb-2rem -mr-2rem border-b-2 border-white'></div>
            <div className='w-50% flex flex-col justify-center mr-20'>
              <span className='max-w-full text-5xl'>{services[3].title}</span>
              <p className='text-2xl mt-10'>{services[3].description}</p>
            </div>
            <img
              src={services[3].image}
              alt=''
              className='block w-96 h-96'
            />
          </div>
          <div className='w-10/12 p-20 flex justify-between flex-row-reverse self-end'>
            <div className='absolute w-105% h-120% -mt-2rem -ml-2rem mb-2rem -mr-2rem border-b-2 border-white'></div>
            <div className=' flex flex-col justify-center ml-20'>
              <span className='max-w-full text-5xl'>{services[4].title}</span>
              <p className='text-2xl mt-10'>{services[4].description}</p>
            </div>
            <img
              src={services[4].image}
              alt=''
              className='block w-96 h-96'
            />
          </div>
          <div className='w-10/12 p-20 flex flex-row justify-between self-start'>
            <div className='w-50% flex flex-col justify-center mr-20'>
              <span className='max-w-full text-5xl'>{services[5].title}</span>
              <p className='text-2xl mt-10'>{services[5].description}</p>
            </div>
            <img
              src={services[5].image}
              alt=''
              className='block w-96 h-96'
            />
          </div>
        </div>
      </section>
      {/* TOOLS  */}
      <section className='relative h-fit flex flex-col justify-between gap-10'>
        <h2 className='text-6xl m-auto mt-10 text-center text-gray-400'>
          {hoveredTool !== '' ? hoveredTool : 'tools'}
        </h2>
        <div className='w-full flex flex-row justify-center'>
          <div className='p-16 bg-gray-900 w-3/4 flex flex-row flex-wrap gap-3 rounded-3xl justify-center'>
            {Object.entries(toolset).map((entry) => (
              <div
                key={entry[0]}
                onMouseEnter={() => switchDisplayedTool(entry[0])}
                onMouseLeave={() => switchDisplayedTool('')}
                className='hover:border-gray-600 hover:border-2 border-2 border-transparent rounded-md p-5'
              >
                <img
                  src={entry[1]}
                  alt={entry[0]}
                  width='70px'
                  height='70px'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PROCESS  */}
      <section className='mt-48'>
        <div className='w-full flex flex-col items-center'>
          <h2 className='text-5xl mb-20 text-center'>my process</h2>
          <p className='text-2xl mt-10 text-center'>
            What do next steps look like for you?
          </p>
          <div className='flex flex-col items-center w-3/4 gap-10 mt-10'>
            {/* STEP 1: Consultation & Planning */}

            <span className='min-h-32 w-1/2 bg-gray-900 rounded-xl p-5'>
              <b>Step 1:</b> <br /> Plan - Book a consultation with me to share
              your vision and requirements, and outline the projects scope and
              timelines. Agree on terms, and seal the deal with a contract.
            </span>
            <span className='min-h-32 w-1/2 bg-gray-800 rounded-xl p-5'>
              Step 2: <br /> Build - Create wireframes, data models, and mockups
              for your approval. Build and integrate front-end and back-end
              components.
            </span>
            <span className='min-h-32 w-1/2 bg-gray-700 rounded-xl p-5'>
              Step 3: <br />
              Test - Ensure everything works seamlessly. Deploy your application
              or site to a live audience. Get useful feedback, and improve!
            </span>

            <span className='min-h-32 w-1/2 bg-gray-600 rounded-xl p-5'>
              <b>Post launch support: </b>
              <br />
              Ongoing maintenance and updates.
            </span>
          </div>
        </div>
      </section>
      {/* BLOG  */}
      <section className='h-fit mt-48 w-full flex flex-row w-3/4 items-center justify-center'>
        <div className='w-7/12 h-48 flex flex-col justify-center'>
          <p className='text-4xl w-3/4'>
            Want Web Design, Content Strategy, and Tech Industry insights?
          </p>
        </div>
        <button className='m-24 py-2 px-5 rounded-xl border-2 border-white'>
          my blog
        </button>
      </section>
      {/* CONTACT ME  */}
      <section className='h-fit'>
        <div className='bg-gray-900 px-6 py-24 sm:py-32 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              contact me
            </h2>
            <p className='mt-2 text-lg leading-8 text-white'></p>
          </div>
          <form
            action='#'
            method='POST'
            className='mx-auto mt-16 max-w-xl sm:mt-20'
          >
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-semibold leading-6 text-white'
                >
                  first name
                </label>
                <div className='mt-2.5'>
                  <input
                    id='first-name'
                    name='first-name'
                    type='text'
                    autoComplete='given-name'
                    className='bg-gray-500 block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-semibold leading-6 text-white'
                >
                  last name
                </label>
                <div className='mt-2.5'>
                  <input
                    id='last-name'
                    name='last-name'
                    type='text'
                    autoComplete='family-name'
                    className='bg-gray-500 block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='company'
                  className='block text-sm font-semibold leading-6 text-white'
                >
                  company
                </label>
                <div className='mt-2.5'>
                  <input
                    id='company'
                    name='company'
                    type='text'
                    autoComplete='organization'
                    className='bg-gray-500 block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold leading-6 text-white'
                >
                  email
                </label>
                <div className='mt-2.5'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='bg-gray-500 block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='phone-number'
                  className='block text-sm font-semibold leading-6 text-white'
                >
                  phone number
                </label>
                <div className='relative mt-2.5'>
                  <div className='absolute inset-y-0 left-0 flex items-center'>
                    <label
                      htmlFor='country'
                      className='sr-only'
                    >
                      country
                    </label>
                    <select
                      id='country'
                      name='country'
                      className='bg-gray-500 h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-white ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm'
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                  </div>
                  <input
                    id='phone-number'
                    name='phone-number'
                    type='tel'
                    autoComplete='tel'
                    className='bg-gray-500 block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-black shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold leading-6 text-white'
                >
                  message
                </label>
                <div className='mt-2.5'>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='bg-gray-500 block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <button
                type='submit'
                className='block w-full rounded-md bg-gray-500 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 active:bg-white focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                let's talk
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
