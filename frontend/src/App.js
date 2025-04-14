// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
// import Comments from "./pages/Comments";
import CreateUser from "./pages/CreateUser";
import "./main.css";

export default function App() {
  return (
    <Router>
      <div className="bgSet">
      <header className="top-bar">
        <nav>
          <Link to="/">Home/ About</Link>
          {/* <Link to="/about">About</Link> */}
          {/* <Link to="/Comments">Comments</Link> */}
          <Link to="/create-user">Comments Section</Link>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/Comments" element={<Comments />} /> */}
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
        </div>  
    </Router>
  );
}

