import logo from '../../logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader/>
        <main>
          <Suspense fallback ={<Spinner/>}>
            <Routes>
              <Route path={'/'}
                     element={<MainPage/>}
              />
              <Route path={'/comics'}
                     element={<ComicsPage/>}
              />
              <Route path={'/comics/:id'}
                     element={<SinglePage Component = {SingleComic} dataType='comic'/>}
              />
              <Route path={'/characters/:id'}
                     element={<SinglePage Component = {SingleChar} dataType='character'/>}
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
