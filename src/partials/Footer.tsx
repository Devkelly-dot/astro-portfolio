import React from 'react';

import { SocialsList } from './components/SocialsList/SocialsList';

const Footer = () => (
  <div className="grid h-20 grid-cols-2 content-center px-10 ">
    <div>© Copyright 2022 Devin Kelly - devwebdev9622@gmail.com </div>
    <SocialsList />
  </div>
);

export { Footer };
