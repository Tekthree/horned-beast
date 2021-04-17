import React from "react";
import Main from "./components/main.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="contain">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
