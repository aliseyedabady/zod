import React from "react";
import ContentLoader from "react-content-loader";
interface Props {
  height: number | string;
  classNames?: string;
}
const Loader = ({ height, classNames }: Props) => {
  return (
    <div className={classNames}>
      <ContentLoader
        speed={0.5}
        backgroundColor="#eee"
        foregroundColor="#f9f9f9"
        style={{ width: "100%", height }}
      >
        <rect
          x="0"
          y="0"
          rx="10"
          style={{ width: "100%", height: "100%" }}
          ry="10"
          width="100%"
          height="100%"
        />
      </ContentLoader>
    </div>
  );
};

export default Loader;
