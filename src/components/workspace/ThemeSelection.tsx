import { Sun, Moon } from "lucide-react";

interface ThemeSelectionProps {
  theme: "system" | "light" | "dark";
  setTheme: (theme: "system" | "light" | "dark") => void;
}

export const ThemeSelection = ({ theme, setTheme }: ThemeSelectionProps) => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Choisissez votre thème</h2>
    <div className="grid grid-cols-3 gap-4">
      <button
        type="button"
        onClick={() => setTheme("system")}
        className={`p-4 rounded-lg border ${
          theme === "system"
            ? "border-primary bg-primary/5"
            : "border-gray-200"
        } hover:border-primary transition-colors`}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-sm">Système</span>
        </div>
      </button>

      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`p-4 rounded-lg border ${
          theme === "light"
            ? "border-primary bg-primary/5"
            : "border-gray-200"
        } hover:border-primary transition-colors`}
      >
        <div className="flex flex-col items-center gap-2">
          <Sun className="w-6 h-6" />
          <span className="text-sm">Clair</span>
        </div>
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`p-4 rounded-lg border ${
          theme === "dark"
            ? "border-primary bg-primary/5"
            : "border-gray-200"
        } hover:border-primary transition-colors`}
      >
        <div className="flex flex-col items-center gap-2">
          <Moon className="w-6 h-6" />
          <span className="text-sm">Sombre</span>
        </div>
      </button>
    </div>
  </div>
);