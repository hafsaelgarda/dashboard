import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Content from './Content'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Content/>
        <Footer/>

        
      </div>
    )
  }
}
