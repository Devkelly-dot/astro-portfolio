import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <GradientText>Dev the Web Dev</GradientText>
          <p className="text-sm font-medium">Still trying to get it to stick</p>
        </>
      }
      description={
        <>
          <ul className="list-disc text-lg">
            <li className="mb-3">
              <a
                href="https://github.com/ReOcelot"
                target="_blank"
                className=" text-cyan-400"
              >
                Full Stack Developer
              </a>
              <br></br>I enjoy every step of the process when developing web
              applications, from planning the architecture to designing the
              aesthetics. Coding has always been a passion of mine and I'm
              thankful to have found an industry where I can deal with logic and
              art all at once
            </li>
            <li className="mb-3">
              <a
                href="https://www.fandomspot.com/author/reocelot/"
                target="_blank"
                className=" text-cyan-400"
              >
                Writer
              </a>
              <br></br>I have spent the last year working as a freelance writer
              - managing myself, juggling clients, and writing about things I
              love like videogames and technology. Through writing I have
              learned a ton about SEO, Google, time management, and how to
              communicate ideas thoroughly, quickly, and effectively
            </li>
            <li className="mb-3">
              <a className=" text-cyan-400">Renaissance Man</a>
              <br></br>I love learning new things and once I find something
              interesting I can't stop myself from diving in head first. I love
              body building, drawing, writing, and even making music. I'm always
              looking for new ways to express myself and new projects to get
              lost in
            </li>
          </ul>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1668738458/portfolio/1664295957101_plus_1_2_kmztg9.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://www.linkedin.com/in/devin-kelly-1603b5194/"
            target="_blank"
          >
            <HeroSocial
              src="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1668727381/portfolio/linkedINlogo_wnog8z.png"
              alt="LinkedIn icon"
            />
          </a>
          <a href="https://github.com/ReOcelot/" target="_blank">
            <HeroSocial
              src="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1668727492/portfolio/github_logo_iylp6u.png"
              alt="Github Icon"
            />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~015cf5968d6091bf25"
            target="_blank"
          >
            <HeroSocial
              src="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1668727967/portfolio/upwork_logo_bwm0wn.png"
              alt="Upwork Icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
