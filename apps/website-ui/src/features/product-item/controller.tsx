import { useRouter } from '#root/core/navigation'

export interface ShowsItemController {
  paymentSlot: React.ReactNode
}

export const ProductItemController = (_props: ShowsItemController) => {
  const router = useRouter()

  // eslint-disable-next-line no-console
  console.log(router)

  return null
}
