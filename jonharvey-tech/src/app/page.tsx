'use client';
import { useState } from 'react';
import styles from './page.module.css';
import MorphingPolygon, {
  POLYGON_PRESETS,
} from './components/css/MorphingPolygon';

import { useForm } from '@tanstack/react-form';
import { contactFormSchema, type ContactFormType } from './util/types';

import Story from './components/Story';

const about = {
  1: 'Expertise in creative strategy, user engagement, and experience design. I help teams deliver impactful digital products by leveraging modern software tools and cloud services for faster, more efficient solutions.',
  2: '',
};

const services = {
  1: {
    title: 'Custom Applications',
    description:
      'Build software tailored to your needs, from CRMs and CMS platforms to LLM-powered telegram bots. Designed for reliability, scalability, and seamless user experience.',
    image: '/images/custom-applications.png',
  },
  2: {
    title: 'UI/UX Design',
    description:
      'Optimize usability and aesthetics to create engaging, user-friendly interfaces. From wireframes to final design, ensure your product can convert and keep users engaged.',
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
  const [contactForm, setContactForm] = useState<ContactFormType>({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleContactFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // depending on the input target name, update the form state field
    setContactForm({
      ...contactForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const validationResults = validateForm(formData);
    if (validationResults === true || validationResults === false) {
      await fetch('/__contactform.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
    } else {
      setFormErrors([validationResults]);
    }
  };

  const validators = {
    name: /^[a-zA-ZÀ-ÿ'-\s]{1,100}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\+?[0-9\s()-]{7,15}$/,
    message: /^[\s\S]{10,1000}$/,
  };

  const validateForm = (formData: FormData): boolean | string => {
    // verify each field, return true if all are valid
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const phoneNumber = formData.get('phoneNumber');

    if (name !== null && email !== null && message !== null) {
      if (!validators.name.test(name as string)) {
        return 'invalid name format';
      }
      if (!validators.email.test(email as string)) {
        return 'invalid email format';
      }
      if (!validators.message.test(message as string)) {
        return 'invalid message format';
      }
      if (phoneNumber !== null && phoneNumber !== '') {
        console.log(phoneNumber);
        if (!validators.phone.test(phoneNumber as string)) {
          return 'invalid phone number format';
        }
      }
      return true;
    }
    return 'form incomplete';
  };

  return (
    <div className='flex-col h-full justify-start text-white'>
      {/* HERO */}
      <section
        id='hero'
        className='w-full min-h-fit lg:h-screen p-0 text-white'
      >
        <div
          aria-hidden='true'
          className='absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40'
        >
          <MorphingPolygon
            style={{
              transform: 'translateX(-50%) rotate(25deg)',
              left: 'calc(50% + 6rem)',
            }}
          />
        </div>
        <div className='flex flex-col items-center w-full h-screen'>
          <div className='flex flex-col items-start w-4/5 h-96 pt-48 mt-24'>
            <div className=''>
              <div>
                <h1 className='text-6xl lg:text-8xl'>launch it.</h1>
              </div>
              <div>
                <p className='text-lg lg:text-xl my-4'>
                  full stack web development, creative strategy, generative
                  multimedia
                </p>
              </div>
            </div>
            <div className=' h-16 flex items-center justify-left pl-2 gap-4'>
              <a
                href='#contact'
                className='px-4 w-fit text-center py-1 border-white border-2 rounded-3xl h-10 bg-black hover:bg-white hover:text-black transition-bg duration-500 lg:w-40 lg:text-2xl lg:py-1 lg:h-12 text-lg'
              >
                start now
              </a>
              <a
                href='#learnmore'
                className='border-white px-4 w-fit text-center py-1 border-2 rounded-3xl h-10 bg-black hover:bg-white hover:text-black lg:w-40 lg:text-2xl lg:py-1 lg:px-6 lg:w-fit lg:h-12 text-lg transition-bg duration-500'
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* STORY */}
      <section className='h-fit my-28 lg:my-0'>
        <Story />
      </section>
      {/* ABOUT */}
      <section
        id='about'
        className='min-h-fit relative'
      >
        <div
          className='px-4 lg:w-full h-fit lg:flex lg:flex-col 
        lg:justify-between lg:items-center lg:pt-5 lg:text-2xl 
        lg:mb-64'
        >
          <div
            aria-hidden='true'
            className='absolute inset-x-0 top-96 lg:top-[150px] top-[250px] left-[calc(40%)] lg:left-[calc(80%+6rem)] -z-10 transform-gpu overflow-hidden blur-3xl'
          >
            <MorphingPolygon
              basePoints={POLYGON_PRESETS.STAR as unknown as [number, number][]}
              style={{
                transform: 'translateX(-30%) rotate(165deg)',
                top: '100px',
              }}
            />
          </div>
          <h2
            className='text-5xl pb-32 font-Outfit text-center lg:text-7xl
           lg:mt-48'
          >
            Jon Harvey
          </h2>
          <div
            className='flex flex-col-reverse gap-2 lg:w-11/12 
          lg:flex lg:flex-row lg:items-center lg:gap-20 
          lg:self-baseline lg:pl-20 lg:pr-20 lg:ml-16'
          >
            <div
              className='pr-4 font-Outfit mx-auto w-11/12 mt-12 
            lg:pr-30 lg:pl-24 text-lg lg:-mb-32
             lg:text-xl'
            >
              <b className='text-teal-200 text-2xl'>
                {about[1].split('.')[0]}.
              </b>
              {about[1].split('.').slice(1).join('.')}
            </div>
            <img
              className='w-11/12 h-11/12 mx-auto lg:w-96 
              lg:h-96 mt-0 bg-gray-900 rounded-xl lg:mt-36'
              src='/images/jonharvey-nb.png'
              alt=''
            />
          </div>
          <div
            className='flex flex-col gap-2 mt-24
           lg:w-11/12 lg:flex lg:-mt-32 lg:flex-row 
           lg:items-center lg:gap-20 lg:self-end lg:pr-20 
           lg:pl-20 lg:mt-20'
          >
            <img
              className='lg:-mt-28 rounded-xl w-11/12 mx-auto h-11/12 
              lg:max-w-96 lg:min-h-96 lg:min-w-96 lg:h-96
               lg:-mb-32 lg:-ml-10'
              src='/images/cr14.png'
              alt=''
            />
            <div className='mx-auto font-Outfit w-11/12 text-lg mt-12 lg:w-8/12 lg:text-left lg:text-2xl lg:mr-38 lg:pl-28'>
              {
                "Since 2020, I've been delivering tailored IT solutions by combining technical expertise with a deeper understanding of "
              }
              <b className='text-teal-600'>
                {'user experience and design principles'}
              </b>
              {
                '. My approach integrates market research, usability testing, and interactive design to craft intuitive and scalable applications.'
              }
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section
        id='learnmore'
        className='h-fit relative'
      >
        <div className='h-96 flex flex-col justify-around'>
          <h2 className='text-3xl bg-white/15 py-8 text-center lg:text-4xl text-white'>
            what can I do for you?
          </h2>
        </div>
        <div className='flex flex-col w-full gap-24 items-center px-4'>
          {/* Section 1 */}
          <div className='flex-col-reverse gap-20 px-2 lg:w-10/12 lg:flex lg:flex-row justify-between lg:gap-0 lg:justify-around self-start'>
            <div className='px-4 lg:w-50% lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:mr-20'>
              <div className='relative inline-block'>
                <div className={styles.backgroundArt1}></div>
                <span className='font-bold font-Outfit text-3xl max-w-full lg:text-4xl'>
                  {services[1].title}
                </span>
              </div>
              <p className='text-lg mt-4 font-Outfit lg:text-2xl lg:mt-10'>
                {services[1].description}
              </p>
            </div>
            <img
              src={services[1].image}
              alt='test'
              className='w-full min-h-36 lg:block lg:w-64 lg:h-64 lg:pt-0'
            />
          </div>
          {/* Section 2 */}

          <div className='flex-col-reverse gap-20 px-2 lg:w-10/12 lg:flex lg:flex-row-reverse justify-between lg:gap-0 self-end'>
            <div className='px-4 lg:w-50% lg:flex flex-col justify-center lg:ml-20'>
              <div className='relative inline-block'>
                <div className={styles.backgroundArt2}></div>
                <span className='text-3xl font-Outfit max-w-full font-bold lg:text-4xl'>
                  {services[2].title}
                </span>
              </div>
              <p className='text-lg mt-4 font-Outfit lg:text-2xl lg:mt-10'>
                {services[2].description}
              </p>
            </div>
            <img
              src={services[2].image}
              alt=''
              className='w-full h-fit lg:pt-10 lg:block lg:w-72 lg:h-72'
            />
          </div>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 top-90 -z-10 lg:top-[150px] lg:left-[calc(30% + 6rem)] transform-gpu overflow-hidden blur-2xl'
          >
            <MorphingPolygon
              basePoints={
                POLYGON_PRESETS.TRIANGLE as unknown as [number, number][]
              }
              style={{
                transform: 'translateX(-50%) rotate(60deg)',
                top: '150px',
              }}
            />
          </div>
          {/* Section 3 */}
          <div className='flex-col-reverse gap-20 px-2 lg:w-10/12 lg:flex lg:flex-row justify-between lg:gap-0 lg:justify-around self-start'>
            <div className='px-4 lg:w-50% lg:flex flex-col justify-center lg:mr-20'>
              <div className='relative inline-block'>
                <div className={styles.backgroundArt3}></div>
                <span className='text-3xl font-Outfit max-w-full font-bold lg:text-4xl'>
                  {services[3].title}
                </span>
              </div>
              <p className='text-lg font-Outfit mt-4 lg:text-2xl lg:mt-10'>
                {services[3].description}
              </p>
            </div>
            <img
              src={services[3].image}
              alt=''
              className='w-full h-fit lg:pt-10 lg:block lg:w-64 lg:h-64'
            />
          </div>
          {/* Section 4 */}
          <div className='flex-col-reverse relative gap-28 px-2 lg:w-10/12 lg:flex lg:flex-row-reverse justify-between lg:gap-0 self-end'>
            <div
              aria-hidden='true'
              className='absolute inset-x-0 lg:top-4 -z-10 lg:-right-96 lg:left-[calc(60%+6rem)] transform-gpu overflow-hidden blur-2xl'
            >
              <MorphingPolygon
                basePoints={
                  POLYGON_PRESETS.WAVE as unknown as [number, number][]
                }
                style={{
                  transform: 'translateX(-70%) rotate(0deg)',
                }}
              />
            </div>
            <div className='px-4 lg:w-50% lg:flex flex-col justify-center lg:ml-20'>
              <div className='relative inline-block'>
                <div className={styles.backgroundArt4}></div>
                <span className='text-3xl font-Outfit max-w-full font-bold lg:text-4xl'>
                  {services[4].title}
                </span>
              </div>
              <p className='text-lg font-Outfit mt-4 lg:text-2xl lg:mt-10'>
                {services[4].description}
              </p>
            </div>
            <img
              src={services[4].image}
              alt=''
              className='w-full h-fit lg:pt-10 lg:block lg:w-64 lg:h-64'
            />
          </div>
          {/* Section 5 */}
          <div className='flex-col-reverse gap-32 px-2 lg:w-10/12 lg:flex lg:flex-row justify-between lg:gap-0 lg:justify-around self-start'>
            <div className='px-4 lg:w-50% lg:flex flex-col justify-center lg:mr-20'>
              <div className='relative inline-block'>
                <div className={styles.backgroundArt5}></div>
                <span className='text-3xl font-Outfit max-w-full font-bold lg:text-4xl'>
                  {services[5].title}
                </span>
              </div>
              <p className='text-lg mt-4 z-50 font-Outfit lg:text-2xl lg:mt-10'>
                {services[5].description}
              </p>
            </div>
            <img
              src={services[5].image}
              alt=''
              className='w-full h-fit lg:pt-10 lg:block lg:w-64 lg:h-64'
            />
          </div>
        </div>
      </section>

      {/* PROCESS  */}
      <section
        id='process'
        className='mt-48'
      >
        <div className='w-full flex flex-col items-center'>
          <h2 className='bg-white/15 z-10 font-Outfit h-20 py-5 w-full text-4xl lg:text-4xl lg:h-24 mb-20 text-center'>
            my process
          </h2>
          <p className='text-xl font-Outfit lg:text-2xl mt-10 text-center'>
            What do your next steps look like?
          </p>
          <div className='text-lg flex flex-col items-center lg:w-3/4 lg:gap-10 lg:mt-10'>
            {/* STEP 1: Consultation & Planning */}

            <span className='mt-4 font-Outfit py-2 mx-4 px-4 lg:min-h-32 lg:w-1/2 border border-teal-300/30 rounded-xl lg:p-5 hover:border-teal-300'>
              <b className='text-2xl'>Step 1: &#x1F441;</b> <br /> Plan - Book a
              free 20 minute consultation with me to share your vision and
              requirements, and outline the projects scope and timelines. If we
              decide to move forward, we may plan more time to discuss required
              details, billed hourly or at a fixed price.
            </span>
            <span className='mt-4 font-Outfit py-2 mx-4 px-4 lg:min-h-32 lg:w-1/2 border border-teal-300/40 rounded-xl lg:p-5 hover:border-teal-300'>
              <b className='text-2xl'>Step 2:</b> &#x1F527;
              <br /> Get building! - I may create wireframes, data models, and
              mockups for your approval. Build and integrate front-end and
              back-end components.
            </span>
            <span className='mt-4 font-Outfit py-2 mx-4 px-4 lg:min-h-32 lg:w-1/2 border border-teal-300/60 rounded-xl lg:p-5 hover:border-teal-300'>
              <b className='text-2xl'>Step 3:</b> &#x1F575;
              <br />
              Test - Ensure everything works seamlessly. Deploy your application
              or site to a live audience. Get useful feedback, iterate, and
              improve!
            </span>

            <span className='w-11/12 mt-6 font-Outfit py-2 mx-4 px-4 lg:min-h-32 lg:w-1/2 border border-teal-300/80 rounded-xl lg:p-5 hover:border-teal-300'>
              <b className=''>
                <b className='text-2xl'>Post launch support: &#x1F9D7;</b>
              </b>
              <br />
              Ongoing maintenance and updates. Improve or add features, increase
              security, or optimize performance.
            </span>
          </div>
        </div>
      </section>
      {/* BLOG  */}
      <section className='mt-12 bg-white/15 lg:h-fit lg:mt-48 w-full flex flex-row lg:w-full items-center justify-center'>
        <div className='relative w-full h-[500px] flex items-center'>
          {/* Background Image */}
          <div
            className='absolute inset-0 w-full h-full'
            style={{
              backgroundImage: 'url("/images/blog-background.jpg")',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          /> 
          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent' />

          {/* Content */}
          <div className='relative z-10 max-w-2xl mx-12 lg:ml-24'>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
              Insights & Innovation
            </h2>
            <p className='text-lg lg:text-xl mb-8 leading-relaxed'>
              Dive into technical deep-dives, industry insights, and creative
              solutions. Learn how I approach complex challenges and stay ahead
              of emerging technologies in web development and digital
              innovation.
            </p>
            <a
              href='/blog'
              className='inline-block px-8 py-3 bg-teal-200/85 text-black rounded-md hover:bg-black hover:text-white transition-colors duration-300 font-semibold'
            >
              Explore the Blog
            </a>
          </div>
        </div>
      </section>
      {/* CONTACT ME  */}
      <section
        id='contact'
        className='h-fit'
      >
        <div className='bg-teal-200/15 px-6 py-24 sm:py-32 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              contact me
            </h2>
            <p className='mt-2 text-lg leading-8 text-white'></p>
          </div>
          <div className='mx-auto mt-16 max-w-xl sm:mt-20'>
            <form
              name='contact'
              onSubmit={handleSubmit}
              className='flex flex-col gap-4'
            >
              <input
                type='hidden'
                name='form-name'
                value='contact'
              />
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold leading-6 text-white'
                >
                  name:
                </label>
                <input
                  id='name'
                  name='name'
                  value={contactForm.name}
                  type='name'
                  onChange={(e) => handleContactFormChange(e)}
                  className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-teal-200 sm:text-sm sm:leading-6'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold leading-6 text-white'
                >
                  email:
                </label>
                <input
                  id='email'
                  name='email'
                  value={contactForm.email}
                  type='email'
                  onChange={(e) => handleContactFormChange(e)}
                  className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-teal-200 sm:text-sm sm:leading-6'
                />
              </div>
              <div>
                <label
                  htmlFor='phoneNumber'
                  className='block text-sm font-semibold leading-6 text-white'
                >
                  phone number:
                </label>
                <input
                  id='phoneNumber'
                  name='phoneNumber'
                  value={contactForm.phoneNumber}
                  type='phone'
                  placeholder='optional'
                  onChange={(e) => handleContactFormChange(e)}
                  className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-teal-200 sm:text-sm sm:leading-6'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold leading-6 text-white'
                >
                  message:
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={contactForm.message}
                  placeholder='send me a message'
                  onChange={(e) => handleContactFormChange(e)}
                  rows={8}
                  className='bg-black block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-200 sm:text-sm sm:leading-6'
                />
              </div>

              {formErrors.length > 0 && (
                <ul className='mt-2 text-sm text-red-600'>
                  {formErrors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )}
              <button
                type='submit'
                className='block w-1/3 mx-auto mt-8 rounded-md bg-teal-200/85 px-3.5 py-2.5 text-center text-sm font-semibold transition-colors text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 active:bg-white focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                contact me
              </button>
            </form>
          </div>

          {/* Repeat similar pattern for other fields */}
        </div>
      </section>
    </div>
  );
}
