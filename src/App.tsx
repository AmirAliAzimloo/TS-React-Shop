import "./App.css";
import Header from "./Components/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  
  const router = useRoutes(routes)

  return (
    // <ContextDataProvider>
    
    <div className="app">
     <Header/>

      {/* Start Content */}

     <ScrollToTop>
     {router}
     </ScrollToTop>

      {/* Finish Content */}

      <footer>
        <a target={"_blank"} href="https://sabzlearn.ir">
          Test Shop
        </a>
      </footer>

    </div>
    // </ContextDataProvider>
  );
}

export default App;
