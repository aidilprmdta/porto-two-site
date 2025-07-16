import { useEffect, useState } from 'react'

const modes = ['system', 'dark', 'light'];

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const applyTheme = (currentTheme) => {
      if (currentTheme === 'dark' || (currentTheme === 'system' && systemDark)) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const cycleMode = () => {
    const currentIndex = modes.indexOf(theme);
    const nextTheme = modes[(currentIndex + 1) % modes.length];
    setTheme(nextTheme);
  };

  const getIcon = () => {
    if (theme === 'system') return '💻';
    return theme === 'dark' ? '🌙' : '☀️';
  };

  useEffect(() => {
  if (theme !== 'system') return;

  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = () => {
    const systemDark = media.matches;
    const root = window.document.documentElement;
    root.classList.toggle('dark', systemDark);
  };
  media.addEventListener('change', handler);

  return () => media.removeEventListener('change', handler);
}, [theme]);

  return (
    <button
      className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      onClick={cycleMode}
      title={`Mode: ${theme}`}
    >
      {getIcon()}
    </button>
  );
}
