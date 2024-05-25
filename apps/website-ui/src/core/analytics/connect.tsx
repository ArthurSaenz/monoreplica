import { Script } from '@monorepo/web-toolkit'

const IDS = {
  dev: 'GTM-5GCZGFLW',
  stage: 'GTM-5JLSF3G',
  prod: 'GTM-5JLSF3G',
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const GTM_ID = IDS[import.meta.env.VITE_DOMAIN_ENV || 'dev']

export const gtmNoScript = () => {
  return `<!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->`
}

export const ScriptGtm = () => {
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
    `}
    </Script>
  )
}
