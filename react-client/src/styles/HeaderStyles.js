import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderSearchInput = styled.input`
  background-color: transparent;
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

const ComposeButton = styled.button`
  width: 120px;
  height: 40px;
  margin: 0px 20px;
  border-radius: 3px;
  font-size: 15px;
  cursor: pointer;

  background-color: #ffffff;
  color: #ff6768;
  border: 2px solid #ff6768;

  &:hover {
    background-color: #ff6768;
    border: none;
    color: #ffffff;
  }
`;

module.exports = {
  HeaderContainer,
  HeaderSearchInput,
  HeaderSearchDiv,
  ProfileImage,
  ComposeButton,
}