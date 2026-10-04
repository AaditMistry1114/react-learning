import { useState } from 'react'

function Settings() {
  const [settings, setSettings] = useState({ theme: "light", fontSize: 16 })

  function toggleTheme() {
    setSettings({
      ...settings,
      theme: settings.theme === "light" ? "dark" : "light",
    })
  }

  function increaseFont() {
    setSettings({ ...settings, fontSize: settings.fontSize + 2 })
  }

  const isDark = settings.theme === "dark"

  return (
    <div
      style={{
        margin: "12px",
        padding: "12px",
        background: isDark ? "#222" : "#eee",
        color: isDark ? "white" : "black",
        fontSize: settings.fontSize,
      }}
    >
      <p>Theme: {settings.theme} | Font size: {settings.fontSize}px</p>
      <button onClick={toggleTheme}>Toggle theme</button>
      <button onClick={increaseFont}>Bigger text</button>
    </div>
  )
}

export default Settings
