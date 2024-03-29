import React from 'react';

import { MyProjectItem } from './ProjectItem';

const MyProjectList = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <MyProjectItem
      name="NoteFitness"
      desc="Login with username: 'test' / password: 'test' or register for an account. A fitness tracking app for users to track their lifts, calories, and cardio during a workout. I made this app because most fitness apps that I've used were over-complicated, so I wanted something simple and easy to use. Built with a Dashboard template."
      demo="https://note-fitness.vercel.app/dashboard/home"
      git="https://github.com/ReOcelot/simplefit-v2"
      tags={[
        'React',
        'Typescript',
        'Django',
        'Python',
        'REST API',
        'Tailwind CSS',
        'Heroku',
        'Vercel',
        'PostgreSQL',
      ]}
    />

    <MyProjectItem
      name="CheckinManga"
      desc="Full stack collection-management site with complete user sign-up and authentification. Also has a headless CMS attatched using Python's (Django) Wagtail. I made this software to help me manage my own collection and hopefully help many other collectors manage theirs."
      demo="https://www.checkinmanga.com/"
      git=""
      tags={[
        'Next.JS',
        'React',
        'Django',
        'Python',
        'REST API',
        'Bootstrap',
        'Heroku',
        'Vercel',
        'PostgreSQL',
      ]}
    />

    <MyProjectItem
      name="RESTful Fitness API"
      desc="An early version of the NoteFitness API"
      demo=""
      git="https://github.com/ReOcelot/simplefit_api_github"
      tags={[
        'Python',
        'Django',
        'REST',
        'API',
        'Documentation',
        'Git',
        'Design Patterns',
      ]}
    />

    <MyProjectItem
      name="My Portfolio (Where You're At)"
      desc="My Porfolio built with Astro.JS - I chose Astro.JS to test its capabilities and add a really powerful static-site tool to my skillset. I've really enjoyed the development process and believe it was a good choice in the end!"
      demo="https://www.devtheweb.dev/"
      git="https://github.com/ReOcelot/astro-portfolio"
      tags={['React', 'Astro.JS', 'Tailwind CSS', 'Netlify']}
    />
  </div>
);

export { MyProjectList };
