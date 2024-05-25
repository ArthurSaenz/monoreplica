export interface MenuItem {
  id?: string
  title: string
  to: string
  search?: Record<string, unknown>
  eventName?: string
  icon: string | React.ReactNode
  isExternal?: boolean
}
