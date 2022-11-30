import convertToHTML from 'markdown-to-html-converter';
import React from 'react';

interface ServiceProps {
  title: string;
  description: String;
  content: string;
}
const ServiceItem = (props: ServiceProps) => {
  function cleanHtml(content: String) {
    let htmlContent = content;
    htmlContent = htmlContent.replace('<a ', '<a target="_blank"');
    htmlContent = htmlContent.replace('own <a ', 'own <a target="_blank"');
    htmlContent = htmlContent.replace(
      '>retro Pokemon',
      'class="text-amber-600">retro Pokemon'
    );
    htmlContent = htmlContent.replace(
      '>personal Manga Blog',
      'class="text-emerald-600">personal Manga Blog'
    );
    return htmlContent;
  }

  let htmlContent = convertToHTML(props.content);
  htmlContent = cleanHtml(htmlContent);

  return (
    <div className="text-left">
      <h2 className="mb-2 text-xl font-bold">{props.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      <hr className="my-4 bg-slate-300" style={{ height: '0.15rem' }}></hr>
    </div>
  );
};

export { ServiceItem };
