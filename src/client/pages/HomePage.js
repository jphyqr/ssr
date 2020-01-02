import React, { Component } from 'react'

 class Home extends Component {
    render() {
        return (
            <div>
  <div>
                I am the VERY BEST home component
            </div>
            <button onClick={()=>console.log('Hi there')}>Press Me!</button>

            </div>
          
        )
    }
}


export default {
    component:Home
   
};