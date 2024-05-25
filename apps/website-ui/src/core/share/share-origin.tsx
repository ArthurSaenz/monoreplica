export const share = async (args: { title: string; text: string; url: string }) => {
  const { title, text, url } = args

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (navigator.share) {
    await navigator.share({
      title,
      text,
      url,
    })
  } else {
    navigator.clipboard.writeText(url)
  }
}
