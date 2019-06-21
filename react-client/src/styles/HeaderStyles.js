import styled from 'styled-components';

const HeaderContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderSearchInput = styled.input`
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  border: 0px;
  margin: 0px;
  padding: 0px;
  width: 100%;
  font-weight: 500;
  font-size: 17px;
  color: #484848;
  text-align: start;
  
  &:focus {
    outline: none;
  }
`;

const HeaderSearchDiv = styled.div`
  background-color: #fffff;
  display: flex;
  padding: 0px 15px;
  align-items: center;
  justify-content: center;
  border: 1px solid #EBEBEB;
  border-radius: 4px;
  height: 48px;
  width: 420px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  border: 2px solid #EBEBEB;
  height: 40px;
  width: 40px;
`;

module.exports = {
  HeaderContainer,
  HeaderSearchInput,
  HeaderSearchDiv,
  ProfileImage,
}