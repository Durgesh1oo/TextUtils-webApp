import React from 'react'

export default function Alert(props) {
  return (
   // this props.alert will work as--> if prop.alert not null then do this (&& ke baad wala thing) 
  <div style={{height:'50px'}}>
  {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.typ}</strong>:{props.alert.msg}
    {/*<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button>*/}
  </div>}
  </div>
  )
}
