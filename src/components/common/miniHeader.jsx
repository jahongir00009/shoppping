import { useState, useEffect } from "react";

const MiniHeader = ({ title, LinkLocation, children }) => {
  const [linkHref, setLinkHref] = useState("");

  useEffect(() => {

    const newLinkHref = LinkLocation.replace("http://localhost:5173/", "");
    setLinkHref(newLinkHref);
  }, [LinkLocation]);

  return (
    <div className="text-center w-full h-[300px] flex items-center justify-center relative">
      <div className="box absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <img src="/Rectangle 1.png" alt="img" className="w-full h-full" />
      </div>
      <div className="z-10 w-full h-full backdrop:blur-sm flex items-center justify-center">
        <div>
          <img src="/logo.png" alt="img" className="mx-auto" />
          <h2 className="text-5xl font-semibold text-black py-4">{title}</h2>
          <div>
            <a href="#">{" Home > "}</a> <a className="text-lg text-black">{linkHref}</a>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MiniHeader;
