import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Fother from "./Fother/../Components/Main/Fother/Fother";

function Home() {
  return (
    <>
      <div className="">
        <header>
          <Header />
        </header>
        <div className="">
          <main>
            <Main />
          </main>
        </div>
        <div className="">
          <footer>
            <Fother />
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
