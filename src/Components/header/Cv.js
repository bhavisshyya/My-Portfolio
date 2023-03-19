import React from "react";

function Cv() {
  return (
    <div className='Cv'>
      <a
        href='https://drive.google.com/file/d/1ug13BQbzahUCxrpuZ_GV0IBevjkEefIP/view?usp=sharing'
        download
        className='btn'
      >
        Download Resume
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  );
}

export default Cv;
