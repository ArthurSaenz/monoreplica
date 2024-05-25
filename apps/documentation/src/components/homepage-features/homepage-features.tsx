/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line import/no-unresolved
import Heading from '@theme/Heading'
import clsx from 'clsx'

import styles from './styles.module.css'

type TFeatureItem = {
  title: string
  svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: TFeatureItem[] = [
  {
    title: 'Rapidly',
    svg: require('@site/static/img/features/fast.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your website up and running
        quickly.
      </>
    ),
  },
  {
    title: 'Efficiently',
    svg: require('@site/static/img/features/efficient.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the{' '}
        <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Operability',
    svg: require('@site/static/img/features/monorepo.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same
        header and footer.
      </>
    ),
  },
  {
    title: 'Simplicity',
    svg: require('@site/static/img/features/strict.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same
        header and footer.
      </>
    ),
  },
]

function Feature({ title, svg, description }: TFeatureItem) {
  const Comp = svg

  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-vert--lg">
        <Comp className={styles['feature-svg']} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
