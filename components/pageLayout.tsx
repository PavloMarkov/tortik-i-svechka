import { FC, PropsWithChildren } from "react";
import { FooterComponent } from "./footer";
import HeaderV2 from "./headerV2";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <HeaderV2 />
        <main>{children}</main>
        <FooterComponent />
      </div>
    </>
  );
};

export default PageLayout;
