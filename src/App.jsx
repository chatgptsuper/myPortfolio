import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import { Layout } from "./components/Layout"
import { lazy, Suspense } from "react"

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const ProjectSection = lazy(() => import("./components/ProjectsSection"));



function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
          <Routes>
            {/* 根路径重定向到home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* 使用Layout包装所有页面 */}
            <Route element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="about" element={<AboutSection />} />
              <Route path="skills" element={<SkillsSection />} />
              <Route path="projects" element={<ProjectSection />} />
              <Route path="contact" element={<Contact />} />
            </Route>

            {/* 404页面 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
