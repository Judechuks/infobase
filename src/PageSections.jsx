import {
  About,
  Hero,
  RecentBlog,
  UpcomingEvents,
  NewsLetter,
} from "./sections";

const PageSections = () => {
  return (
    <>
      <Hero />
      <About />
      <UpcomingEvents />
      <RecentBlog />
      <NewsLetter />
    </>
  );
};
export default PageSections;
