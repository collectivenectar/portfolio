'use client';
import styles from './page.module.css';

import { useState, useEffect, useRef } from 'react';

import Story from '../components/Story';

const about = {
  1: 'Expertise in brand strategy, user engagement, and experience design. I help teams deliver impactful digital products by leveraging modern software tools and cloud services for faster, more efficient solutions.',
  2: "Since 2020, I've been delivering tailored IT solutions by combining technical expertise with a deep understanding of user experience and design principles. My approach integrates market research, usability testing, and interactive design to craft intuitive and scalable applications.",
};

const services = {
  1: {
    title: 'Custom Applications',
    description:
      'Build software tailored to your needs, from CRMs and CMS platforms to e-commerce solutions. Designed for reliability, scalability, and seamless user experience.',
    image: '/images/custom-applications.png',
  },
  2: {
    title: 'UI/UX Design',
    description:
      'Optimize usability and aesthetics to create engaging, user-friendly interfaces. From wireframes to final design, ensure your product delivers value.',
    image: '/images/ux-research.png',
  },
  3: {
    title: 'Scalability',
    description:
      'Develop robust systems that scale effortlessly with your business growth. Ensure performance and reliability under high traffic and demand.',
    image: '/images/scalability.png',
  },
  4: {
    title: 'Integration Services',
    description:
      'Seamlessly integrate with third-party tools such as payment gateways, analytics platforms, and APIs to expand your application’s capabilities.',
    image: '/images/system-integration.png',
  },
  5: {
    title: 'Maintenance & Optimization',
    description:
      'Provide ongoing support to improve performance, enhance features, and maintain compliance with the latest security standards.',
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
  const formRef = useRef<HTMLFormElement>(null);
  const [hoveredTool, updateHoveredTool] = useState<string>('');

  const switchDisplayedTool = (currentTool: string) => {
    updateHoveredTool(currentTool);
  };

  const validateForm = (form: HTMLFormElement): string[] => {
    const errors: string[] = [];
    const formData = new FormData(form);

    // Validate first name
    if (!formData.get('first-name')) {
      errors.push('First name is required.');
    }

    // Validate last name
    if (!formData.get('last-name')) {
      errors.push('Last name is required.');
    }

    // Validate company (optional in this case, skip validation)
    // if (!formData.get("company")) {
    //   errors.push("Company is required.");
    // }

    // Validate email
    const email = formData.get('email') as string;
    if (!email) {
      errors.push('Email is required.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Email is invalid.');
    }

    // Validate phone number
    // const phone = formData.get('phone-number') as string;
    // if (!phone) {
    //   errors.push('Phone number is required.');
    // } else if (!/^\+?[0-9\s\-()]+$/.test(phone)) {
    //   errors.push('Phone number is invalid.');
    // }

    // Validate message
    if (!formData.get('message')) {
      errors.push('Message is required.');
    }

    return errors;
  };

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    const form = event.currentTarget;

    const errors = validateForm(form as HTMLFormElement);

    if (errors.length > 0) {
      alert(`Please fix the following errors:\n- ${errors.join('\n- ')}`);
      return;
    }

    if (form) {
      const formData = new FormData(form as HTMLFormElement);

      const formObject: Record<string, string> = {};
      formData.forEach((value, key) => {
        formObject[key] = value.toString();
      });
      console.log(new URLSearchParams(formObject).toString())
      fetch('/__contactform.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formObject).toString(),
      })
        .then(() => console.log('Form successfully submitted'))
        .catch((error) => alert(error));
    }
  };

  useEffect(() => {
    const form = formRef.current;
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  return (
    <div className='flex-col h-full justify-start text-white'>
      {/* HERO */}
      <section className='w-full min-h-fit p-0 text-white'>
        <h1 className='text-6xl text-center mt-44 lg:text-justify lg:text-8xl lg:ml-72 lg:mr-20 lg:mb-2 lg:mt-56'>
          launch it.
        </h1>
        <p className='w-3/5 mx-auto lg:text-1xl lg:ml-72'>
          full stack web development, brand strategy, multimedia production
        </p>
        <div className='flex flex-row gap-2 justify-center mt-8 lg:w-full lg:ml-72 lg:mt-16 lg:mb-72 lg:h-20 lg:flex lg:flex-row lg:gap-x-12 lg:justify-start'>
          <a href='#contact' className='px-4 w-fit text-center py-1 border-white border-2 rounded-3xl h-10 bg-black hover:bg-white hover:text-black transition-bg duration-500 lg:w-40 text-lg'>
            start now
          </a>
          <a href='#learnmore' className='border-white px-4 w-fit text-center py-1 border-2 rounded-3xl h-10 bg-black hover:bg-white hover:text-black lg:w-40 text-lg transition-bg duration-500'>
            learn more
          </a>
        </div>
      </section>
      {/* STORY */}
      <section className='h-fit my-32'>
        <Story />
      </section>
      {/* ABOUT */}
      <section className='min-h-fit'>
        <div className='px-4 lg:w-full h-fit lg:flex lg:flex-col lg:justify-between lg:items-center lg:pt-5 lg:text-2xl lg:mb-64'>
          <h2 className='text-3xl mb-12 lg:text-4xl'>Jon Harvey</h2>
          <div className='flex flex-row gap-2 lg:w-11/12 lg:flex lg:flex-row lg:items-center lg:gap-20 lg:self-baseline lg:pl-20 lg:pr-20 lg:ml-16'>
            <div className='pr-4 lg:w-8/12 text-base lg:-mb-32 lg:text-xl'>
              {about[1]}
            </div>
            <img
              className='w-32 h-32 lg:w-96 lg:h-96 mt-0 bg-gray-900 rounded-xl lg:mt-36'
              src='/images/jonharvey-nb.png'
              alt=''
            />
          </div>
          <div className='flex flex-row gap-2 mt-20 lg:w-11/12 lg:flex lg:-mt-32 lg:flex-row lg:items-center lg:gap-20 lg:self-end lg:pr-20 lg:pl-20 lg:mt-20'>
            <img
              className='lg:-mt-28 min-w-32 rounded-xl min-h-32 max-h-32 max-w-32 lg:max-w-96 lg:min-h-96 lg:min-w-96 lg:h-96 lg:-mb-32 lg:-ml-10'
              src='/images/cr14.png'
              alt=''
            />
            <div className='lg:w-8/12 lg:text-right lg:text-xl lg:mr-20'>
              {about[2]}
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section id='learnmore' className='min-h-92vh'>
        <div className='h-96 flex flex-col justify-around'>
          <h2 className='bg-white/15 py-8 text-center lg:text-4xl text-white'>
            what can I do for you?
          </h2>
        </div>
        <div className='flex flex-col justify-between w-full min-h-92vh items-center'>
          <div className='px-2 lg:w-10/12 lg:p-20 gap-2 flex flex-row justify-between self-start'>
            <div className='relative w-2/3 lg:w-50% lg:flex lg:flex-col lg:justify-center lg:mr-20'>
              <div className={styles.backgroundArt1}></div>
              <span className='font-bold max-w-full lg:text-4xl'>
                {services[1].title}
              </span>
              <p className='mt-4 lg:text-2xl lg:mt-10'>
                {services[1].description}
              </p>
            </div>
            <img
              src={services[1].image}
              alt='test'
              className='w-36 min-h-36 lg:block lg:w-96 lg:h96'
            />
          </div>
          <div className='mt-12 px-2 lg:w-10/12 lg:p-20 flex gap-2 justify-between flex-row-reverse self-end'>
            <div className='relative lg:w-50% flex flex-col justify-center lg:ml-20'>
              <div className={styles.backgroundArt2}></div>
              <span className='max-w-full font-bold lg:text-4xl'>
                {services[2].title}
              </span>
              <p className='mt-4 lg:text-2xl lg:mt-10'>
                {services[2].description}
              </p>
            </div>
            <img
              src={services[2].image}
              alt=''
              className='w-36 h-36 lg:block lg:w-96 lg:h-96'
            />
          </div>
          <div className='mt-12 px-2 lg:w-10/12 lg:p-20 gap-2 flex flex-row justify-between self-start'>
            <div className='absolute w-105% h-120% -mt-2rem -ml-2rem mb-2rem -mr-2rem border-b-2 border-white'></div>
            <div className='relative lg:w-50% flex flex-col justify-center lg:ml-20'>
              <div className={styles.backgroundArt3}></div>
              <span className='max-w-full font-bold lg:text-4xl'>
                {services[3].title}
              </span>
              <p className='mt-4 lg:text-2xl lg:mt-10'>
                {services[3].description}
              </p>
            </div>
            <img
              src={services[3].image}
              alt=''
              className='w-36 h-36 lg:block lg:w-96 lg:h-96'
            />
          </div>
          <div className='mt-12 px-2 lg:w-10/12 lg:p-20 flex justify-between gap-2 flex-row-reverse self-end'>
            <div className='absolute w-105% h-120% -mt-2rem -ml-2rem mb-2rem -mr-2rem border-b-2 border-white'></div>
            <div className='relative lg:w-50% flex flex-col justify-center lg:ml-20'>
              <div className={styles.backgroundArt4}></div>
              <span className='max-w-full font-bold lg:text-4xl'>
                {services[4].title}
              </span>
              <p className='mt-4 lg:text-2xl lg:mt-10'>
                {services[4].description}
              </p>
            </div>
            <img
              src={services[4].image}
              alt=''
              className='w-36 h-36 lg:block lg:w-96 lg:h-96'
            />
          </div>
          <div className='mt-12 px-2 lg:w-10/12 lg:p-20 gap-2 flex flex-row justify-between self-start'>
            <div className='relative lg:w-50% flex flex-col justify-center lg:ml-20'>
              <div className={styles.backgroundArt5}></div>
              <span className='max-w-full font-bold lg:text-4xl'>
                {services[5].title}
              </span>
              <p className='mt-4 lg:text-2xl lg:mt-10'>
                {services[5].description}
              </p>
            </div>
            <img
              src={services[5].image}
              alt=''
              className='w-36 h-36 lg:block lg:w-96 lg:h-96'
            />
          </div>
        </div>
      </section>
      {/* TOOLS  */}
      <section className='relative h-fit flex flex-col justify-between gap-8'>
        <h2
          className={`text-2xl lg:text-4xl m-auto mt-28 text-center text-gray-400 ${
            hoveredTool.length ? 'text-red-300' : 'text-white'
          }`}
        >
          {hoveredTool !== '' ? hoveredTool : 'tools'}
        </h2>
        <div className='w-full flex flex-row justify-center'>
          <div className='lg:p-16 p-2 gap-1 bg-white/15 lg:w-3/4 w-11/12 flex flex-row flex-wrap lg:gap-3 rounded-3xl justify-center'>
            {Object.entries(toolset).map((entry) => (
              <div
                key={entry[0]}
                onMouseEnter={() => switchDisplayedTool(entry[0])}
                onMouseLeave={() => switchDisplayedTool('')}
                onClick={() => switchDisplayedTool(entry[0])}
                className='hover:border-gray-600 hover:border-2 border-2 border-transparent rounded-md lg:p-5'
              >
                <img
                  src={entry[1]}
                  alt={entry[0]}
                  width='70px'
                  height='70px'
                  className='w-10 h-10 lg:w-20 lg:h-20'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PROCESS  */}
      <section className='mt-48'>
        <div className='w-full flex flex-col items-center'>
          <h2 className='bg-white/15 h-20 py-6 w-full text-2xl lg:text-4xl lg:h-24 mb-20 text-center'>
            my process
          </h2>
          <p className='text-xl lg:text-2xl mt-10 text-center'>
            What do next steps look like for you?
          </p>
          <div className='flex flex-col items-center lg:w-3/4 lg:gap-10 lg:mt-10'>
            {/* STEP 1: Consultation & Planning */}

            <span className='mt-4 py-2 mx-4 px-4 lg:min-h-32 lg:w-1/2 bg-white/15 rounded-xl lg:p-5'>
              <b>Step 1:</b> <br /> Plan - Book a consultation with me to share
              your vision and requirements, and outline the projects scope and
              timelines. Agree on terms, and seal the deal with a contract.
            </span>
            <span className='mt-4 py-2 mx-4 px-4 lg:min-h-32 lg:w-1/2 bg-white/15 rounded-xl lg:p-5'>
              Step 2: <br /> Build - Create wireframes, data models, and mockups
              for your approval. Build and integrate front-end and back-end
              components.
            </span>
            <span className='mt-4 py-2 mx-4 px-4 lg:min-h-32 lg:w-1/2 bg-white/15 rounded-xl lg:p-5'>
              Step 3: <br />
              Test - Ensure everything works seamlessly. Deploy your application
              or site to a live audience. Get useful feedback, and improve!
            </span>

            <span className='w-11/12 py-2 mt-4 mx-4 px-4 lg:min-h-32 lg:w-1/2 bg-white/15 rounded-xl lg:p-5'>
              <b>Post launch support: </b>
              <br />
              Ongoing maintenance and updates.
            </span>
          </div>
        </div>
      </section>
      {/* BLOG  */}
      {/* <section className='my-12 bg-white/15 lg:h-fit lg:mt-48 w-full flex flex-row lg:w-full items-center justify-center'>
        <div className='lg:w-12/12 lg:h-48 flex flex-col justify-center'>
          <p className='pl-32 lg:text-4xl lg:w-fit'>
            Want Web Design, Content Strategy, and Tech Industry insights?
          </p>
        </div>
        <button className='rounded-xl bg-black hover:bg-white transition-bg hover:text-black duration-500 m-12 min-w-28 py-1 px-5 lg:mr-24 lg:py-2 lg:px-5 lg:rounded-xl border-2 border-white'>
          my blog
        </button>
      </section> */}
      {/* CONTACT ME  */}
      <section id='contact' className='mt-12 h-fit'>
        <div className='bg-white/15 px-6 py-24 sm:py-32 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              contact me
            </h2>
            <p className='mt-2 text-lg leading-8 text-white'></p>
          </div>
          <form
            ref={formRef}
            name='contact'
            method='POST'
            data-netlify='true'
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
                    className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
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
                    className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
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
                    className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
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
                    className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
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
                  <input
                    id='phone-number'
                    name='phone-number'
                    type='tel'
                    autoComplete='tel'
                    className='bg-black block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
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
                    className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <button
                type='submit'
                className='block w-full rounded-md bg-white/75 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 active:bg-white focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
