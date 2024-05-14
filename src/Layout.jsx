import { Outlet } from "react-router-dom";
import { Footer, Header } from "./sections";
import { Spinner } from "./components";
import { useGlobalContext } from "./context";

const Layout = () => {
  const { loading } = useGlobalContext();
  return (
    <>
      {loading ? (
        <Spinner message="loading data..." />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};
export default Layout;
