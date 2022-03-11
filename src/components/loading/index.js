import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

function Loading({type, color, wrapperStyle}) {
  return (
    <Wrapper style={wrapperStyle}>
      <ReactLoading type={type === undefined ? 'bubbles' : type } color={color === undefined ? 'black' : color} height={'10%'} width={'5%'} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: #ccc;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loading;
