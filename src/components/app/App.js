import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, {lazy, Suspense} from "react";

import Spinner from "../spinner/Spinner";
import TopMenu from "../topMenu/TopMenu"
import Orders from "../orders/Orders";

const Page404 = lazy(() => import("../pages/404")); //../pages/404 not working
const MainPage = lazy(() => import("../pages/MainPage"));
const Groups = lazy(() => import("../groups/Groups"));


function App() {
  return (
    <Router>
      <div className="app">
        <TopMenu/>
        <main>
          <Suspense fallback ={<Spinner/>}>
            <Routes>
              <Route path={'/'}
                     element={<MainPage Component = {Orders}/>}
              />
              <Route path={'/groups'}
                     element={<MainPage Component = {Groups}/>}
              />
              <Route path={'*'}
                     element={<Page404/>}
              />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App;
