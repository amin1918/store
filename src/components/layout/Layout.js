import Navbar from "../navbar/Navbar"

function Layout({ children }) {
  return (
    <> 
    <Navbar/>
      <div className="min-h-screen flex flex-col w-full px-6">

     {children}</div>
    </>

  )
}

export default Layout