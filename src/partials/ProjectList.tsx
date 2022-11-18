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
            <Tags color={ColorTags.FUCHSIA}>Next.js</Tags>
            <Tags color={ColorTags.LIME}>React</Tags>
            <Tags color={ColorTags.SKY}>Django REST framework</Tags>
            <Tags color={ColorTags.ROSE}>React-Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>Headless CMS / Blog</Tags>
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
            <Tags color={ColorTags.EMERALD}>Django REST framework</Tags>
            <Tags color={ColorTags.YELLOW}>React-Bootstrap</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
