import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
// import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Pages/login.jsx";
import Register from "./Pages/register.jsx";
import Pll from "./Pages/main.jsx";
import { ConfigProvider, theme } from "antd";
import Profile from "./Pages/Profile.jsx";
import Page404 from "./Pages/Page404.jsx";
import Category from "./Pages/category.jsx";
import Article from "./Pages/article.jsx";
import Aboute from "./Pages/Aboute.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import Index from "./Pages/Admin/Index.jsx";

createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={{ token: { colorPrimary: "#01017d" } }}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Pll />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category" element={<Category />} />
          <Route path="/Aboute" element={<Aboute />} />
          <Route path="/category/:uuid" element={<Category />} />
          <Route path="/article/:uuid" element={<Article />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="/admin/dashboard" element={<Index />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
);
