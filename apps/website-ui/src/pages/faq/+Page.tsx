import { useData } from '#root/app/page-data'

import type { Data } from './+data'
import styles from './faq.module.scss'

interface PageProps<T> {
  route?: {
    useLoaderData: () => T
  }
}

export const Page = (props: PageProps<Data>) => {
  const { route } = props

  const data = useData<Data>({ route })

  const { testDataQuestions } = data.pageProps

  return (
    <>
      <section className={styles.root}>
        <h1 className={styles.title}>שאלות ותשובות</h1>

        <div>
          {testDataQuestions.map((item, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={idx}>
              <span>{item.question}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
