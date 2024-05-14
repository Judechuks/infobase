import AppProvider from "./context";
import { Routes, Route } from "react-router-dom";
import {
  BlogListPage,
  BlogPage,
  Contact,
  EventListPage,
  EventPage,
  Missing,
} from "./pages";
import Layout from "./Layout";
import PageSections from "./PageSections";
import "./App.scss";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageSections />} />
          <Route path="/events" element={<EventListPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
