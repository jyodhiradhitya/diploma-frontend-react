import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Watch } from "react-loader-spinner";

function MainLayout({ children }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  // console.log(loading);
  // console.log(theme);
  return (
    <>
      {loading ? (
        <div className="flex justify-center h-screen py-[40vh] dark:bg-slate-900">
          <Watch
            height="100"
            width="100"
            radius="48"
            color="#2F58CD"
            i
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={loading}
          />
        </div>
      ) : (
        <div className="h-screen dark:bg-slate-800 ">
          <Navbar />
          <div>{children}</div>
        </div>
      )}
    </>
  );
}

export default MainLayout;
