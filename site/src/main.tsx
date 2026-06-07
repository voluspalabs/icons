import {
  PiAppleLogoDuoSolid,
  PiFigmaStroke,
  PiGithubStroke,
  PiNpmLogoSymbolStroke,
  PiPackage02Solid,
  PiReactStroke,
  PiSparkleAi01Stroke,
  PiVscodeContrast,
} from '@voluspalabs/icons'
import { createRoot } from 'react-dom/client'
import './styles.css'

const samples = [
  { name: 'NPM', Icon: PiNpmLogoSymbolStroke },
  { name: 'GitHub', Icon: PiGithubStroke },
  { name: 'Figma', Icon: PiFigmaStroke },
  { name: 'React', Icon: PiReactStroke },
  { name: 'VS Code', Icon: PiVscodeContrast },
  { name: 'Apple', Icon: PiAppleLogoDuoSolid },
  { name: 'AI', Icon: PiSparkleAi01Stroke },
  { name: 'Package', Icon: PiPackage02Solid },
]

function App() {
  return (
    <main className="shell">
      <section className="intro">
        <p className="eyebrow">@voluspalabs/icons</p>
        <h1>Voluspa Icons</h1>
        <p className="lede">
          React SVG icons, packaged for ESM imports and ready for the
          presentation site.
        </p>
      </section>

      <section aria-label="Icon samples" className="icon-grid">
        {samples.map(({ name, Icon }) => (
          <article className="icon-card" key={name}>
            <Icon aria-hidden="true" className="icon" />
            <span>{name}</span>
          </article>
        ))}
      </section>
    </main>
  )
}

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element was not found.')
}

createRoot(root).render(<App />)
