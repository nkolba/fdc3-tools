import { Context } from './contextTypes'
import { ContextHandler } from './ContextHandler'
import { DisplayMetadata } from './Metadata'
import { Listener } from './Listener'

export interface Channel {
  id: string
  type: string
  displayMetadata?: DisplayMetadata

  broadcast(context: Context): void
  getCurrentContext(contextType?: string): Promise<Context | null>
  addContextListener(handler: ContextHandler): Listener
  addContextListener(contextType: string, handler: ContextHandler): Listener
}
