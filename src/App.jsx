import React from "react";
import Navbar from "./components/Navbar/Navbar";
import BlurBlob from "./components/BlurBlob";


const App = () =>  {
  return (
    <div >
      <div className="relative min-h-screen bg-black">
        <Navbar />
        <BlurBlob position={{ top: "40%", left: "20%" }} size={{ width: "300px", height: "300px" }} />
      </div>

    </div>
  )
}  
 
export default App