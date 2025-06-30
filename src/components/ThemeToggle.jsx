import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useStore } from "../store/useStore";

export const ThemeToggle = () => {
    const { theme, setTheme } = useStore();

    useEffect(() => {
        // const [isDarkMode, setIsDarkMode] = useState(false);

        const storedTheme = localStorage.getItem("theme") || "dark";
        setTheme(storedTheme);

        // const storedItem = localStorage.getItem("theme");
        // if (storedItem === "dark") {
        //     setIsDarkMode(true);
        //     document.documentElement.classList.add("dark");
        // } else {
        //     setIsDarkMode(false);
        //     document.documentElement.classList.remove("dark");
        // }
    }, [setTheme]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };
    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
        >
            {theme === "dark" ? (
                <Sun className="h-6 w-6 text-yellow-300 cursor-pointer" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900 cursor-pointer" />
            )}
        </button>
    );
};
