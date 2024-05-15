export const SITE_TITLE = "mxnan.dev";
export const SITE_DESCRIPTION = "Tech Blog and Portfolio of @mxnan";


// Define an interface for the frontmatter properties for BaseLayout
export interface Frontmatter {
  title: string;
  description: string;
  ogImage: string;
  author: string;
}

export const SiteLinksData: [string, string][] = [
  ["Home", "/"],
  ["Blogs", "/blogs"],
  ["Contact", "/contact"],
  // Add more site links as needed
];

export const SocialLinksData: [string, string][] = [
  ["Twitter", "https://twitter.com/your-handle"],
  ["GitHub", "https://github.com/your-username"],
  ["LinkedIn", "https://linkedin.com/in/your-profile"],
  // Add more social links as needed
];
