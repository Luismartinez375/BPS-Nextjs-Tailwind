import React, { useState } from 'react'
const MobileMenu = () => {

  const [toggle, setToggle] = useState(false)

  const content = (
    <main>
      <button 
            className={`${toggle && "toggle-btn" } relative h-8 w-8 cursor-pointer text-3xl md:hidden`}
            onClick={() =>  {
                setToggle(toggle ? false : true)
            }}
              >
                <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div> 
      </button>
      {toggle && (
    <div className=" animate-open-menu absolute top-[68px] bg-black w-full text-5xl flex-col justify-center origin-top left-0">
  <nav
  className="flex flex-col min-h-screen items-center py-8"
  aria-label="mobile"
  onClick={() =>  {
    setToggle(toggle ? false : true)
}}
>
  <a
    href="#hero"
    className="w-full py-6 text-center text-white hover:opacity-90"
    onClick={() =>  {
        setToggle(toggle ? false : true)
    }}
  >
    Home
  </a>
  <a
    href="#rockets"
    className="w-full py-6 text-center text-white hover:opacity-90"
    onClick={() =>  {
        setToggle(toggle ? false : true)
    }}
  >
    Our Rockets
  </a>
  <a
    href="#testimonials"
    className="w-full py-6 text-center text-white hover:opacity-90"
    onClick={() =>  {
        setToggle(toggle ? false : true)
    }}
  >
    Testimonials
  </a>
  <a
    href="#contact"
    className="w-full py-6 text-center text-white hover:opacity-90"
    onClick={() =>  {
        setToggle(toggle ? false : true)
    }}
  >
    Contact Us
  </a>
  <a
    href="#footer"
    className="w-full py-6 text-center text-white hover:opacity-90"
    onClick={() =>  {
        setToggle(toggle ? false : true)
    }}
  >
    Legal
  </a>
</nav>
</div>
      )}
      </main>
  )
  return content
}
export default MobileMenu

{/* <div className={`${show && "animate-open-menu"} ${!show && "hidden"} absolute top-68 bg-black w-full text-5xl flex-col justify-center origin-top`}>

<nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">

  <a className="w-full text-center py-6 hover:opacity-90" href="#hero" onClick={() => { setEffect(false); setShow(show ? false : true); }}>Home</a>

  <a className="w-full text-center py-6 hover:opacity-90" href="#rockets" onClick={() => { setEffect(false); setShow(show ? false : true); }}>Our Rockets</a>

  <a className="w-full text-center py-6 hover:opacity-90" href="#testimonials" onClick={() => { setEffect(false); setShow(show ? false : true); }}>Testimonials</a>

  <a className="w-full text-center py-6 hover:opacity-90" href="#contact" onClick={() => { setEffect(false); setShow(show ? false : true); }}>Contact Us</a>

  <a className="w-full text-center py-6 hover:opacity-90" href="#footer" onClick={() => { setEffect(false); setShow(show ? false : true); }}>Legal</a>

</nav>

</div> */}