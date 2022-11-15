import  ReactDOM  from 'react-dom'
import React from 'react'

const Modal_Styles={
  backgroundColor:'#FFF',
  position:'fixed',
  top:'50%',
  left:'50%',
  right:'10%',
  bottom:'10%',
  padding:50,
  textAlign:'justify',
  transform:'translate(-50%,-50%)',
  borderRadius:'12px',
  zIndex:1000
}
const Overlay_Styles={
  position:'fixed',
  left:0,
  top:0,
  right:0,
  bottom:0,
  backgroundColor:'rgba(0,0,0,0.3)',
  zIndex:1000,
}

export default function Modal({open,children,onClose}) {
   if(!open){return null}
  
  return ReactDOM.createPortal(
    <>
    <div style={Overlay_Styles}>
    <div style={Modal_Styles}>
    {children} 
    <button className='mbutton' onClick={onClose}>x</button>
   
    </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}

// export default function Modal({open,children,onClose}) {
//   // if(!open){return null}
  
//   return ReactDOM.createPortal(
//     <>
//     <div style={Overlay_Styles} onClick={onClose}>
//     <div style={Modal_Styles}>
//     {children} 
//     <button className='mbutton' onClick={onClose}>x</button>
//     </div>
//     </div>
//     </>,
//     document.getElementById('portal')
//   )
// }
