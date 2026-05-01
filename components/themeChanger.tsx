"use client";
import { useTheme } from "next-themes";
import { FC } from "react";

export const ThemeChanger: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-2 md:flex-row items-center">
      <p className="dark:text-white flex gap-2 items-center">
        <span>The current theme:</span>
      </p>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="dark:text-white"
      >
        <option value="system" className="dark:text-white">
          System
        </option>
        <option value="dark" className="dark:text-white">
          Dark
        </option>
        <option value="light" className="dark:text-white">
          Light
        </option>
      </select>
    </div>
  );
};
