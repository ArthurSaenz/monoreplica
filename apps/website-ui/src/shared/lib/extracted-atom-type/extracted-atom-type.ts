import { Atom } from 'jotai'

export type ExtractedAtomType<T> = T extends Atom<infer U> ? U : never
