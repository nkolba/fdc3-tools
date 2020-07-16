export interface IntentMetadata {
  name: string
  displayName: string
}

export interface AppMetadata {
  name: string
  title?: string
  tooltip?: string
  description?: string
  icons?: string[]
  images?: string[]
}

export interface DisplayMetadata {
  name?: string
  color?: string
  glyph?: string
}
