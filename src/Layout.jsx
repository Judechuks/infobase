import { Outlet } from "react-router-dom";
import { Footer, Header } from "./sections";
import { Spinner } from "./components";
import { useGlobalContext } from "./context/globalContext";

const Layout = () => {
  const { loading } = useGlobalContext();
  return (
    <>
      {loading ? (
        <Spinner message="loading data..." />
      ) : (
        <>
          <Header />
          <div style={{ paddingBottom: "60px" }}></div>
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};
export default Layout;
