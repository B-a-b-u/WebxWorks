import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    return(
        <>
           <Navbar/>
           <div className="home" style={{"border" : "1px red solid", "padding" : "50%"}}>
            Home page
           </div>
           <Footer/>
        </>
    )
}

export default Home;