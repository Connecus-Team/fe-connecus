import React from 'react';
import ReactLoading from 'react-loading';

function LoadingInline({type, color, wrapperStyle}) {
  return (
    <ReactLoading type={type} color={color} height={'100%'} width={'100%'} />
  );
}

export default LoadingInline;
