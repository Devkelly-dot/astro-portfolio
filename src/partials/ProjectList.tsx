import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="CheckinManga"
        description="Full stack book / manga management site. Full authentification system with registration and login. Users can create, manage, and share their manga wishlists. Also has a blog attatched using a headless Wagtail CMS"
        link="https://www.checkinmanga.com/"
        img={{
          src: 'https://res.cloudinary.com/dq1ktd5ge/image/upload/v1668737524/portfolio/cm_logo_qoxwqi.png',
          alt: 'CheckinManga logo',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React</Tags>
            <Tags color={ColorTags.LIME}>Next.js</Tags>
            <Tags color={ColorTags.SKY}>Django API</Tags>
            <Tags color={ColorTags.ROSE}>React-Bootstrap</Tags>
            <Tags color={ColorTags.FUCHSIA}>Headless CMS</Tags>
          </>
        }
      />
      <Project
        name="Note Fitness"
        description="A simple web application for managing workouts and daily calorie intake. Designed without the bells and whistles that clutter most modern fitness apps"
        link="https://notefitness.herokuapp.com/"
        img={{
          src: 'https://res.cloudinary.com/dq1ktd5ge/image/upload/v1668736556/portfolio/notefit_tvokbt.png',
          alt: 'NoteFitness Logo',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React</Tags>
            <Tags color={ColorTags.SKY}>Django REST API</Tags>
            <Tags color={ColorTags.YELLOW}>React-Bootstrap</Tags>
          </>
        }
      />

      <Project
        name="Simple Fit API"
        description="Fully Documented API for a fitness App"
        link="https://github.com/ReOcelot/simplefit_api_github/"
        img={{
          src: 'https://res.cloudinary.com/dq1ktd5ge/image/upload/v1668727492/portfolio/github_logo_iylp6u.png',
          alt: 'Github Logo',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>Django REST framework</Tags>
            <Tags color={ColorTags.YELLOW}>Software Architecture</Tags>
            <Tags color={ColorTags.EMERALD}>Documentation</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
