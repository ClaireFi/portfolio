import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;


 const fillerStyles = {
   height: '100%',
   width: `${completed}%`,
   backgroundColor: bgcolor,
   borderRadius: 'inherit',
   textAlign: 'right',
   transition: 'width 1s ease-in-out',
 }


  return (
    <div className="h-[25px] w-full bg-gray-50 rounded-xl">
      <div style={fillerStyles}>      
        <span className="p-5 text-white font-bold">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
