import React from 'react';
import {
  HeaderContainer,
  HeaderSearchInput,
  HeaderSearchDiv,
  ProfileImage,
  ComposeButton,
} from '../styles/HeaderStyles.js';

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 0
    }
    this.getProfileURL = this.getProfileURL.bind(this);
  }
  
  SearchSVG() {
    return (
      <div style={{ width: '39px' }}>
        <svg
          viewBox="0 0 16 16"
          style={{
            height: '18px',
            width: '18px',
            display: 'block',
            fill: '#484848',
          }}
        >
          <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"/>
        </svg>
      </div>
    );
  }

  HeaderSearch() {
    return (
      <div
        style={{
          height: '80px',
          width: '863px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <HeaderSearchDiv>
          {this.SearchSVG()}
          <HeaderSearchInput placeholder="Search" />
        </HeaderSearchDiv>
      </div>
    );
  }

  getProfileURL() {
    if (this.props.id === '1') {
      return "https://a0.muscache.com/im/pictures/30397eff-806e-4893-ae88-ea577a5c3adc.jpg?aki_policy=profile_x_medium";
    } else {
      return "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p320x320/52970886_10107329474600973_2427085606652739584_n.jpg?_nc_cat=100&_nc_oc=AQkK_eUWealzSnDXQkRXtp7sSG9XAVyRbwE5eiU1yq851aC1Y1KggCeLGcY4BGjGqeNAkWFKnjE4Nw3zlQ8nOq1E&_nc_ht=scontent-sjc3-1.xx&oh=aa8fa88fa9a3339b710810fa9bf87afd&oe=5DC561F8";
    }
  }


  render() {
    return (
      <HeaderContainer>
        {this.HeaderSearch()}
        <ComposeButton onClick={this.props.onCompose}>Compose</ComposeButton>
        <ProfileImage alt="profile-pic" src={this.getProfileURL()} />
      </HeaderContainer>
    )
  }
}

export default Header;

//"https://a0.muscache.com/im/pictures/30397eff-806e-4893-ae88-ea577a5c3adc.jpg?aki_policy=profile_x_medium"
//https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p320x320/52970886_10107329474600973_2427085606652739584_n.jpg?_nc_cat=100&_nc_oc=AQkK_eUWealzSnDXQkRXtp7sSG9XAVyRbwE5eiU1yq851aC1Y1KggCeLGcY4BGjGqeNAkWFKnjE4Nw3zlQ8nOq1E&_nc_ht=scontent-sjc3-1.xx&oh=aa8fa88fa9a3339b710810fa9bf87afd&oe=5DC561F8