import { DesktopAgent } from './DesktopAgent'

export * from './ContextTypes'
export { DesktopAgent }

declare global {
  interface Window {
    fdc3: DesktopAgent
  }
}
