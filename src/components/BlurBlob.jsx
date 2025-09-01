import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute "
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-full h-full rounded-full opacity-30 blur-3xl animate-blob bg-purple-500 z-10"></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
