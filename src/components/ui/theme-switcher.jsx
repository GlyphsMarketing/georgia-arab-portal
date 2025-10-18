import * as React from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

function ThemeSwitcher({ darkMode, toggleDarkMode, variant = "ghost", size = "sm", showText = false }) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleDarkMode}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center gap-2"
    >
      {darkMode ? (
        <>
          <Sun className="h-4 w-4" />
          {showText && "Light Mode"}
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
          {showText && "Dark Mode"}
        </>
      )}
    </Button>
  )
}

export { ThemeSwitcher }