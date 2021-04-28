import React from 'react';
import './style.scss'

export default function Loader() {
   return (
      <div className="loader__wrap">
         <div className="lds-facebook"><div></div><div></div><div></div></div>
      </div>
   )
}
