import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import "./loader.css"

const loader={

}



export const LoaderHOC=(propsName)=>(WrappedComponent)=>{
  return class LoaderHOC extends Component {
  
  // const prop = this.props[propsName];
        isEmpty(prop) {
            return (
                prop === null ||
                prop === undefined ||
                (prop.hasOwnProperty('length') && prop.length === 0) ||
                (prop.constructor === Object && Object.keys(prop).length === 0)
            );
        }
  
  
  render()
   { 
    {console.log(this.props)
    console.log(propsName)
    }
    return this.isEmpty(this.props[propsName])?<div className="loader" style={{marginLeft: "430px",marginTop:"50px"}}  > <Loader 
         type="ThreeDots"  color="#1171ef"  height={70} width={70}
        //  timeout={3000} //3 secs 

      /></div>:<WrappedComponent {...this.props} />
  }
}
}