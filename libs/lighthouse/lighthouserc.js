module.exports = {
  ci: {
    collect: {
      settings: {
        chromeFlags: '--no-sandbox --ignore-certificate-errors',
        skipAudits: ['full-page-screenshot'],
      },
      url: [
        'https://smartrike.com/p/str5-personalized-folding-baby-trike-elephant/5053100',
        'https://smartrike.com/c/folding-trikes',
      ],
      numberOfRuns: 3,
    },
    // assert: {
    //   preset: 'lighthouse:recommended',
    // },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'http://localhost:9001',
      token: 'd804e973-0c0e-4c1a-bace-9854fb683d83', // the build token provider by the wizard. Could also use LHCI_TOKEN variable instead
      ignoreDuplicateBuildFailure: true,
    },
    // server: {},
    // wizard: {},
  },
}
