import React from "react";

const NetworkSpeed = ({ netSpeed }) => {
  return (
    <>
      <p className='mt-4 text-red-500'>
        Download Speed : <span className="pl-2 font-normal">{netSpeed.downloadSpeed} Mbps</span>
      </p>
      <p className="text-red-500">
        Upload Speed : <span className="pl-2 font-normal">{netSpeed.uploadSpeed} Mbps</span>
      </p>
      <p className="text-red-500">
        Location : <span className="pl-2 font-normal">{netSpeed.userLocation}</span>
      </p>
    </>
  );
};

export default NetworkSpeed;
