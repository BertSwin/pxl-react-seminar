import React from 'react';
import ReactDOM from 'react-dom';
import NavbarTop from './navigation/NavbarTop'

export default(props) => {
  return (
      <div>
        <NavbarTop/>
          <br/>
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
      </div>
  )
}