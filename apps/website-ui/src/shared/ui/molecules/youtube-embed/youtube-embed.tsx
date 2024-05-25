/* eslint-disable @typescript-eslint/no-namespace */
import 'lite-youtube-embed/src/lite-yt-embed'
import 'lite-youtube-embed/src/lite-yt-embed.css'

import styles from './youtube-embed.module.scss'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CustomElement<T> = Partial<T & React.DOMAttributes<T> & { children: any }>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['lite-youtube']: CustomElement<{ videoid: string; playlabel: string }>
    }
  }
}

export interface TYoutubeEmbedProps {
  youtubeVideoId: string
  playLabel: string
}

export const YoutubeEmbed = (props: TYoutubeEmbedProps) => {
  const { youtubeVideoId, playLabel } = props

  return (
    <div className={styles.root}>
      <lite-youtube videoid={youtubeVideoId} playlabel={playLabel} />
    </div>
  )
}
