import ProductPage from "./components/AllProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PolicyBar from "./components/PolicyBar";
import ClientReactions from "./components/Reactions";
import TrustBar from "./components/TrustBar";

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <TrustBar />
      <ProductPage />
      <ClientReactions />
      <PolicyBar />
      <Footer />
    </>
  )
}

export default App;