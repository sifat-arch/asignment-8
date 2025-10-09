import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation, useRouteError } from "react-router";
import Footer from "../components/Footer";
import CommonError from "../pages/CommonError";
import LoadingSpinner from "../components/LoadingSpiner";

const MainLayout = () => {
  const error = useRouteError();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="max-w-[1800px] mx-auto flex flex-col min-h-screen">
      <Navbar />

      {isLoading && <LoadingSpinner text="Please wait..." />}

      <div className="flex-1 max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
        {error ? <CommonError error={error} /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
