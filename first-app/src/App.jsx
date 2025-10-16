import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Loading from "./components/loading";

const App = () => {
  // let loading = false;
  const [loading, setLoading] = React.useState(false);

  function handleClick(){
    setLoading(!loading);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    console.log(loading);
  }

  return (
   <>
   <Navbar />
    {loading ? <Loading /> : <Main />}
    <button style={{
      padding:"10px",
      background:"blue",
      color:"white",
      border:"none",
      borderRadius:"5px",
      cursor:"pointer",
      margin:"20px"
    }} onClick={handleClick}>Fetch Product</button>
   <Footer />
   </>
  );
};

export default App;
