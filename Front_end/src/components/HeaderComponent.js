
import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div>
                <a href='' className='navbar-brand'>
                    Employee Management Application
                </a>
            </div>
        </nav>
      </header>
    )
  }
}
