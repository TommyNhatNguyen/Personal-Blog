import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "./constant/paths";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATHS.BLOG} element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
