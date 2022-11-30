import React from 'react';

import { SocialsIcon } from './SocialIcon';

const SocialsList = () => (
  <div className="grid grid-cols-3 justify-self-end">
    <SocialsIcon
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1668727381/portfolio/linkedINlogo_wnog8z.png"
      name="LinkedIn"
      href="https://www.linkedin.com/in/devin-kelly-1603b5194/?original_referer="
    />
    <SocialsIcon
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1668727492/portfolio/github_logo_iylp6u.png"
      name="Github"
      href="https://github.com/ReOcelot"
    />
    <SocialsIcon
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1668727967/portfolio/upwork_logo_bwm0wn.png"
      name="Upwork"
      href="https://www.upwork.com/freelancers/~015cf5968d6091bf25"
    />
  </div>
);

export { SocialsList };
