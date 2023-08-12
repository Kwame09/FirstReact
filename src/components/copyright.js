import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center text-gray-500 text-sm">
      © {currentYear} by Kwame. All rights reserved.
    </div>
  );
};

export default Copyright;
