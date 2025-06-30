import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { ThemeToggle } from "./ThemeToggle"
import { StarBackground } from "./StarBackground"

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      {/* 全局组件 */}
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      {/* 路由内容 */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}