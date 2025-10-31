import "./App.css";
import Header from "./components/Header";
import ObjectList from "./components/ObjectList";
import SubjectList from "./components/SubjectList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="top-banner">
        <div className="banner-wrapper">
          <img
            src="https://aptech.fpt.edu.vn/wp-content/uploads/2021/02/FAT-lich-su-FPT-Aptech.png"
            alt="banner"
          />
        </div>
      </div>
      <ObjectList />
      <SubjectList />
      <Footer />
    </>
  );
}

export default App
