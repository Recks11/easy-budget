import React from 'react';

const IconButton = ({ iconClass, icon, alt, ...rest }) => {
  rest.className = rest.className ? rest.className.concat(' circle') : 'circle'
  return (
    <button {...rest}>
      <img className={iconClass} src={icon} alt={alt} />
    </button>
  );
};

export default IconButton;
