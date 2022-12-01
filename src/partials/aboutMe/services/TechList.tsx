import React from 'react';

import { TechItem } from './TechItem';

const TechList = () => (
  <div className="grid grid-cols-5 sm:gap-8 md:gap-4">
    <TechItem
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669794891/icons/react_mr3lva.png"
      name="React.JS"
    />
    <TechItem
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669794892/icons/nextjs_c0009w.png"
      name="Next.JS"
    />
    <TechItem
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669794891/icons/astro_h3quoz.png"
      name="Astro.JS"
    />
    <TechItem
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669794891/icons/python_r11iyl.png"
      name="Python"
    />
    <TechItem
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669794891/icons/django_ll23aw.png"
      name="Django"
    />
    <TechItem
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669794891/icons/typescript_k2geah.png"
      name="TypeScript"
    />
    <TechItem
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669794891/icons/strapi_nzjxzv.png"
      name="Strapi"
    />
    <TechItem
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669879283/icons/html_5_i4vqnt.png"
      name="HTML"
    />
    <TechItem
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669879283/icons/css_cmwfcu.png"
      name="CSS"
    />
    <TechItem
      img_url="https://res.cloudinary.com/dq1ktd5ge/image/upload/v1669879283/icons/git_lwpogc.png"
      name="Git"
    />
  </div>
);

export { TechList };
