import { Share } from '@capacitor/share'

export const share = async (args: { title: string; text: string; url: string }) => {
  const { title, text, url } = args

  await Share.share({
    title,
    text,
    url,
    dialogTitle: 'Share',
  })
}
