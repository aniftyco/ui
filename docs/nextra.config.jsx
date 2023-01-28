import { Fragment } from "react";
import nextSeoConfig from "./next-seo.config";
import { useConfig } from "nextra-theme-docs";

/**  @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  logo: () => <div className="flex space-x-3 divide-x divide-gray-600">
    <h1 className="font-extrabold">Nifty UI</h1>
    <h2 className="pl-3 text-gray-600">UI Library for Nifty React Applications built on Tailwind CSS</h2>
  </div>,
  logoLink: false,
  project: {
    link: 'https://github.com/aniftyco/nifty-ui',
  },
  docsRepositoryBase: 'https://github.com/aniftyco/nifty-ui/blob/master/docs/pages',
  useNextSeoProps() {
    return nextSeoConfig;
  },
  head: () => {
    const { frontMatter } = useConfig();
    
    return (
      <Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={frontMatter.title || nextSeoConfig.defaultTitle} />
        <meta property="og:description" content={nextSeoConfig.description} />
      </Fragment>
    );
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: false,
  },
  footer: {
    text: (
      <p className="w-full text-sm text-center">
          &copy; {new Date().getFullYear()} Nifty Development, LLC
      </p>
    )
  }
};
