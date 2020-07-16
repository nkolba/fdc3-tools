/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2019 FINOS FDC3 contributors - see NOTICE file
 */

import { Context } from './ContextTypes'
import { Listener } from './Listener'
import { Channel } from './Channel'
import { ContextHandler } from './ContextHandler'
import { IntentResolution } from './IntentResolution'
import { AppIntent } from './AppIntent'

/**
 * A Desktop Agent is a desktop component (or aggregate of components) that serves as a
 * launcher and message router (broker) for applications in its domain.
 *
 * A Desktop Agent can be connected to one or more App Directories and will use directories for application
 * identity and discovery. Typically, a Desktop Agent will contain the proprietary logic of
 * a given platform, handling functionality like explicit application interop workflows where
 * security, consistency, and implementation requirements are proprietary.
 */
export interface DesktopAgent {
  open(name: string, context?: Context): Promise<void>

  broadcast(context: Context): void
  addContextListener(handler: ContextHandler): Listener
  addContextListener(contextType: string, handler: ContextHandler): Listener

  findIntent(intent: string, context?: Context): Promise<AppIntent>
  findIntentsByContext(context: Context): Promise<AppIntent[]>
  raiseIntent(intent: string, context: Context, target?: string): Promise<IntentResolution>
  addIntentListener(intent: string, handler: ContextHandler): Listener

  getSystemChannels(): Promise<Channel[]>
  getCurrentChannel(): Promise<Channel>

  joinChannel(channelId: string): Promise<void>
  getOrCreateChannel(channelId: string): Promise<Channel>
  leaveCurrentChannel(): Promise<void>
}
