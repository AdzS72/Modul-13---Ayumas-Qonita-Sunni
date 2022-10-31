import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header"; //Include Heder
import Footer from "./Footer"; //Include Footer
import Body from "./Body"; //Include Footer

class App extends React.Component {
  render() {
    return (
      <div className="maincontainer">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
