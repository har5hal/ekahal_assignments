import React, { Component } from 'react'

import SideBarSection from "./SideBarSection";
import MainContainer from "./MainContainer";

export default class Dashboard extends Component {
  render() {
    return (
      <div className='light'>
        <SideBarSection />
        <MainContainer />
      </div>
    )
  }
}
