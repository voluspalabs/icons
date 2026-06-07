import { PiGithubStroke, PiNpmLogoSymbolStroke } from '@voluspalabs/icons'
import { PiGithubStroke as PiGithubStrokeSubpath } from '@voluspalabs/icons/pi-github-stroke'

const icons = [PiGithubStroke, PiNpmLogoSymbolStroke, PiGithubStrokeSubpath]

for (const Icon of icons) {
  void Icon({ 'aria-hidden': true })
}
