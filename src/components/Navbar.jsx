import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";
import { useStore } from "../store/useStore";
import { NavLink } from "react-router-dom";

const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
    // const [isScrolled, setIsScrolled] = useState(false);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { isScrolled, setIsScrolled, isMenuOpen, setIsMenuOpen } = useStore();
    // const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // 页面垂直滚动距离大于10px时设置isScrolled为true
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setIsScrolled]);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background-md/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <NavLink
                    className="text-xl font-bold text-primary flex items-center cursor-pointer"
                    to="/home"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            AlwaysHere
                        </span>{" "}
                        Portfolio
                    </span>
                </NavLink>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => {
                        return (
                            <NavLink
                                key={key}
                                to={item.path}
                                className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                            >
                                {item.name}
                            </NavLink>
                        );
                    })}
                </div>

                {/* mobei nav */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => {
                            return (
                                <NavLink
                                    key={key}
                                    to={item.path}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};
