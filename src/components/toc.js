import React from "react";

const Toc = props => {
  return (
    <div className="toc-cover">
      <h4 className="toc-title">目次</h4>
      <div
        className="toc-list-cover"
        dangerouslySetInnerHTML={{
          __html: props.data,
        }}
      />
    </div>
  );
};

export default Toc;