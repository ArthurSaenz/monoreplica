import { LayoutPrimary } from '#root/app/layouts'
import { useRouter } from '#root/core/navigation'

export const Page = () => {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const _productId = router.search.id || ''

  return (
    <>
      <LayoutPrimary logoHref="/" onShare={undefined} onBack={() => {}}>
        <>Hello world</>
      </LayoutPrimary>
    </>
  )
}
