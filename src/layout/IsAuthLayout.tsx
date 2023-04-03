import React from 'react';

interface IsAuthLayoutProps {
  children: React.ReactNode;
}

const IsAuthLayout: React.FC<IsAuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className='general-layout__body'>{children}</div>
    </div>
  );
};

export default IsAuthLayout;
