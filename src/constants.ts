export const RESUME_URL = `${process.env.PUBLIC_URL}/Ajay-Manath-Resume.pdf`;

export const MODAL_ROUTES = [
  "/process/enterprise-design-system",
  "/process/litigation-intelligence",
  "/process/feedback-collaboration",
  "/process/shop-os",
  "/process/carno",
  "/process/mapmy-gig",
  "/process/promptject",
  "/article/prototyping-with-custom-design-systems",
  "/article/automating-design-system-testing",
  "/article/future-of-design-ai-interfaces",
  "/article/ai-prototyping-workflow",
] as const;

export const isModalRoute = (path: string): path is (typeof MODAL_ROUTES)[number] =>
  MODAL_ROUTES.includes(path as (typeof MODAL_ROUTES)[number]);
