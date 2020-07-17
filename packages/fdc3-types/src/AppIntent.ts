import { IntentMetadata, AppMetadata } from './Metadata'

export interface AppIntent {
  intent: IntentMetadata
  apps: AppMetadata[]
}
