import * as React from "react"

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Moekyaw Aung</h1>
      <p>Senior Android Developer | Kotlin & Compose</p>
      <h2>Projects</h2>
      <ul>
        <li>MoekyawTranslator</li>
        <li>SecureChat App</li>
      </ul>
      <footer>
        <p>Email: moekyawaung@email.com</p>
        <p>GitHub: <a href="https://github.com/moekyawaung">github.com/moekyawaung</a></p>
      </footer>
    </main>
  )
}
