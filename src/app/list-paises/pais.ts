export type Root = Root2[]

export interface Root2 {
  name: Name
  capital?: string[]
  region: string
  population: number
  flags: Flags
}

export interface Name {
  official: string
  common: string
}

export interface Flags {
  png: string
  svg: string
  alt?: string
}