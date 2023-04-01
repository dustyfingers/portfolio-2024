import React from "react";

interface IPageContainer {
  children?: React.ReactNode;
}

const PageContainer: React.FC<IPageContainer> = ({
  children,
}: IPageContainer) => {
  return <div>{children}</div>;
};

export default PageContainer;
