import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import DisplayImages from "./components/DisplayImages";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="App">
      <div className="dis">Welcome to image search!!</div>
      <header className="App-header d-flex align-items-center justify-content-center">
        <SearchBar />
      </header>
      <main className="main-wrapper">
        {props.display_images && <DisplayImages />}
      </main>
      {/* <!-- Footer --> */}
      <footer >

        {/* <!-- Copyright --> */}
        <div className="dis1">© 2021 Copyright:
          <a href="">XYZ.com</a>   Developed By: ANUJ KUMAR SINGH
        </div>
        {/* <!-- Copyright --> */}

      </footer>
      {/* <!-- Footer --> */}


    </div>
  );
};

const mapStateToProps = (state) => ({
  display_images: state.image.display_images,
});

export default connect(mapStateToProps, {})(App);
