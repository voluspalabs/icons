import { createRoot } from 'react-dom/client'
import { App } from './app'
import './styles.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element was not found.')
}

const appRoot = createRoot(root)
appRoot.render(<App />)

if (import.meta.hot) {
  import.meta.hot.dispose(() => appRoot.unmount())
}
