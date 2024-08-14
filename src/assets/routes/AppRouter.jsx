import { Route, BrowserRouter, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> Movie Page</div>} />
        <Route path="/actors" element={<div> Actors Page</div>} />
        <Route path="/tv" element={<div>TVshows Page</div>} />
        <Route path="/series" element={<div> Series Page</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
