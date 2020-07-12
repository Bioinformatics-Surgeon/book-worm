import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import Words from "./pages/Words";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Words />
        </div>
      </Router>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>Hello</div>
//         <Route exact path={["/", "/words"]}>
//           <Words />
//         </Route>
//       </Router>
//     );
//   }
// }

// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path={["/", "/words"]}>
//             <Words />
//           </Route>
//           {/* <Route exact path={["/", "/words"]}>
//             <Books />
//           </Route> */}
//           {/* <Route exact path="/words/:id">
//             <Detail />
//           </Route> */}
//           {/* <Route>
//             <NoMatch />
//           </Route> */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
