import "./App.css";
import ScrollToTop from "./Utils/ScrollToTop";
import Route from "./Routes/Route";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Route />
      <ScrollToTop />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
