import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import DataPage from "./components/DataPage";
import NotFound from "./components/NotFound";
import ScrollUpButton from "./components/ScrollUpButton";

function App() {
  return (
    <>
      <div className="w-full pl-[20vw] bg-black text-white text-2xl py-2">
        <a href="/">TwitThreads</a>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread/:id" element={<DataPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollUpButton />
    </>
  );
}

export default App;
