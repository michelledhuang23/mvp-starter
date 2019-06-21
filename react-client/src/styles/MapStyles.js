import styled from 'styled-components';

const Marker = styled.div`
  color: white;
  background: #1b7fbd;
  padding: 15px 10px;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  
  &:hover {
    color: white;
    background: #ff7a8a;
  }
`;
module.exports = Marker;