import './navbar.scss'
function Navbar() {
  return (
    <div className='navbar'>
     <div className="logo">
      <img src="logo.svg" alt="" />
      <span>lamadin</span>
     </div>
      <div className="icons">
        <img src="/search.svg" className='icon' alt="" />
        <img src="/app.svg" className='icon' alt="" />
        <img src="/expand.svg" alt="" />
        <div className='notification' >
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
         <div className='user'>
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
         </div>
        <img src="/settings.svg" alt="" className='icon' />
      </div>
     </div>
  )
}

export default Navbar