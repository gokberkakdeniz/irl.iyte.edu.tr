import React from 'react'
import Masthead from './Masthead/Masthead'
import Announcements from './Announcements/Announcements'
import PreviouslyIRL from './PreviouslyIRL/PreviouslyIRL'
import Title from './../Title'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Title pageName="Anasayfa"></Title>
        <Masthead></Masthead>
        <Announcements></Announcements>
        <PreviouslyIRL></PreviouslyIRL>
      </>
    )
  }
}