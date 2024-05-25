/** @type Partial<import('stylelint').Configuration> */
const config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  rules: {
    // Selectors should be lowercase with hyphens, may have __postfixes
    'selector-class-pattern': '^[a-z0-9\\-]+(__[a-z0-9\\-]+)*$',
    // Use stylelint-config-rational-order instead
    'order/properties-alphabetical-order': null,
    // FIXME: enable rule
    'custom-property-pattern': null,
    'selector-max-id': 3,
    'max-nesting-depth': [
      3,
      {
        ignoreAtRules: ['each', 'media', 'supports', 'include'],
        ignore: ['pseudo-classes'],
      },
    ],
    // Fix disallowed "border: none";
    'declaration-property-value-disallowed-list': [
      {
        '/^border/': [],
      },
    ],
    'declaration-bang-space-before': null,
  },
}

export default config
