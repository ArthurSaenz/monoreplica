const extensions = {
  js: ['.js', '.mjs', '.jsx'],
  ts: ['.ts', '.tsx', '.d.ts'],
  jsAndTs: ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
}

require('@rushstack/eslint-patch/modern-module-resolution')

/**
 * ESLint configuration
 *
 * @see https://eslint.org/docs/user-guide/configuring
 * @copyright Arthur Saenko
 *
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react', 'plugin:prettier/recommended'],
  plugins: [
    'jest',
    'jsx-a11y',
    'testing-library',
    '@typescript-eslint',
    'import',
    'unicorn',
    'sonarjs',
    'react',
    'react-hooks',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    'import/core-modules': [],
    'import/internal-regex': '^@types/',
    'import/extensions': extensions.jsAndTs,
    'import/resolver': {
      node: {
        extensions: extensions.jsAndTs,
      },
    },
    'import/ignore': ['\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': extensions.ts,
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // import rules
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowCallExpression: false,
      },
    ],
    'import/export': 'error',
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: [
    //       'test/**', // tape, common npm pattern
    //       'tests/**', // also common npm pattern
    //       'spec/**', // mocha, rspec-like pattern
    //       '**/__tests__/**', // jest pattern
    //       '**/__mocks__/**', // jest pattern
    //       'test.{js,jsx}', // repos with a single test file
    //       'test-*.{js,jsx}', // repos with multiple top-level test files
    //       '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
    //       '**/jest.config.js', // jest config
    //       '**/jest.setup.js', // jest setup
    //       '**/vue.config.js', // vue-cli config
    //       '**/webpack.config.js', // webpack config
    //       '**/webpack.config.*.js', // webpack config
    //       '**/rollup.config.js', // rollup config
    //       '**/rollup.config.*.js', // rollup config
    //       '**/gulpfile.js', // gulp config
    //       '**/gulpfile.*.js', // gulp config
    //       '**/Gruntfile{,.js}', // grunt config
    //       '**/protractor.conf.js', // protractor config
    //       '**/protractor.conf.*.js', // protractor config
    //       '**/karma.conf.js', // karma config
    //     ],
    //     optionalDependencies: false,
    //   },
    // ],
    'import/no-mutable-exports': 'error',
    'import/no-amd': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        'd.ts': 'never',
      },
    ],
    'import/newline-after-import': 'warn',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { maxDepth: Number.POSITIVE_INFINITY }],
    'import/no-useless-path-segments': ['warn', { commonjs: true }],

    'react/jsx-uses-vars': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': 'error',
    'react/no-unknown-property': 'error',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'warn',
    'react/state-in-constructor': ['warn', 'never'],
    'react/style-prop-object': 'error',
    'react/jsx-key': 'warn',
    'react/no-array-index-key': 'warn',
    'react/jsx-no-bind': [
      'warn',
      {
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    // "react/jsx-props-no-spreading": [
    //   "error",
    //   {
    //     html: "ignore",
    //   },
    // ],
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-no-undef': 'error',

    // hooks
    'react-hooks/rules-of-hooks': 'error',

    // new jst transform
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // eslint react (old)
    // 'react/jsx-uses-react': 'warn',
    // 'react/react-in-jsx-scope': 'error',

    // eslint error-check rules
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'warn',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'warn',
    'no-regex-spaces': 'warn',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',

    // eslint best-practice rules
    'array-callback-return': 'error',
    'default-case': 'error',
    'dot-notation': 'warn',
    eqeqeq: ['error', 'smart'],
    'no-alert': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error', 'info', 'group', 'groupEnd', 'table'] }],
    'no-case-declarations': 'warn',
    'no-constructor-return': 'warn',
    'no-else-return': ['warn', { allowElseIf: false }],
    'no-empty-pattern': 'error',
    'no-extend-native': 'error',
    'no-fallthrough': 'warn',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'warn',
    'no-loop-func': 'error',
    'no-new': 'warn',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['warn', { props: false }],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'error',
    'no-useless-call': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-return': 'warn',
    'no-void': 'warn',
    'no-with': 'error',
    // radix: "error",
    radix: 'off',
    yoda: 'warn',

    // eslint variable rules
    'no-delete-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'warn',
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],

    // eslint stylistic rules
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    'no-lonely-if': 'warn',
    'no-bitwise': 'warn',
    'no-array-constructor': 'warn',
    'no-new-object': 'warn',
    'no-unneeded-ternary': 'warn',
    'operator-assignment': 'warn',
    'prefer-exponentiation-operator': 'warn',

    // eslint es6 rules
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'require-yield': 'error',

    // unicorn plugin
    'unicorn/catch-error-name': 'warn',
    'unicorn/error-message': 'warn',
    'unicorn/escape-case': 'warn',
    'unicorn/explicit-length-check': 'warn',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-console-spaces': 'warn',
    'unicorn/no-for-loop': 'warn',
    'unicorn/no-hex-escape': 'warn',
    'unicorn/no-nested-ternary': 'warn',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-unreadable-array-destructuring': 'warn',
    'unicorn/no-zero-fractions': 'warn',
    'unicorn/number-literal-case': 'warn',
    'unicorn/prefer-add-event-listener': 'error',
    // rule does not exist but listed in docs
    // 'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-dataset': 'warn',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-flat-map': 'warn',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-negative-index': 'warn',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-trim-start-end': 'warn',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        extendDefaultReplacements: false,
        replacements: {
          /*
           * Ignore anything related to "event"
           * Since there is no option to ignore global "event" variable
           * (this variable forces to replace e/evt with "event_",
           *  but we don't want underscore there)
           */

          arr: {
            array: true,
          },
          // e: {
          //   event: true,
          //   error: true,
          // },
          err: {
            error: true,
          },
          cb: {
            callback: true,
          },
          ctx: {
            context: true,
          },
          curr: {
            current: true,
          },
          el: {
            element: true,
          },
          elem: {
            element: true,
          },
          // evt: {
          //   event: true,
          // },
          ext: {
            extension: true,
          },
          len: {
            length: true,
          },
          lib: {
            library: true,
          },
          msg: {
            message: true,
          },
          num: {
            number: true,
          },
          obj: {
            object: true,
          },
          opts: {
            options: true,
          },
          str: {
            string: true,
          },
          val: {
            value: true,
          },
        },
      },
    ],
    'unicorn/throw-new-error': 'error',
    // My custom rules for unicorn
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: [
          /\+Page\.tsx$/,
          /\+Layout\.tsx$/,
          /\+onRenderHtml\.tsx$/,
          /\+onRenderClient\.tsx$/,
          /\+onHydrationEnd\.ts$/,
          /\+onBeforePrerenderStart\.ts$/,
          /\+onBeforeRender\.ts$/,
        ],
      },
    ],

    // 'sonarjs/generator-without-yield': 'error',
    'sonarjs/no-all-duplicated-branches': 'warn',
    'sonarjs/no-element-overwrite': 'warn',
    // 'sonarjs/no-empty-collection': 'warn',
    'sonarjs/no-identical-conditions': 'warn',
    'sonarjs/no-identical-expressions': 'warn',
    // 'sonarjs/no-ignored-return': 'warn',
    'sonarjs/no-one-iteration-loop': 'warn',
    'sonarjs/no-use-of-empty-return-value': 'warn',
    // 'sonarjs/non-existent-operator': 'error',
    'sonarjs/cognitive-complexity': ['warn', 20],
    'sonarjs/max-switch-cases': ['warn', 20],
    'sonarjs/no-collapsible-if': 'warn',
    'sonarjs/no-collection-size-mischeck': 'error',
    'sonarjs/no-duplicate-string': ['warn', { threshold: 6 }],
    // 'sonarjs/no-gratuitous-expressions': 'error',
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/no-inverted-boolean-check': 'error',
    // 'sonarjs/no-nested-switch': 'error',
    // 'sonarjs/no-nested-template-literals': 'error',
    'sonarjs/no-redundant-boolean': 'warn',
    'sonarjs/no-redundant-jump': 'warn',
    'sonarjs/no-same-line-conditional': 'error',
    'sonarjs/no-small-switch': 'warn',
    'sonarjs/no-unused-collection': 'error',
    'sonarjs/no-useless-catch': 'warn',
    'sonarjs/prefer-object-literal': 'warn',
    'sonarjs/prefer-single-boolean-return': 'warn',
    'sonarjs/prefer-while': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // rules from @typescript-eslint
        // it should be there to support mixed codebases
        '@typescript-eslint/adjacent-overload-signatures': 'warn',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/naming-convention': [
          'error', // could be warn
          {
            selector: 'interface',
            format: ['PascalCase'],
            // prefix: ['I'],
          },
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            // prefix: ['T'],
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            filter: {
              // you can expand this regex to add more allowed names
              regex: '[Story]',
              match: false,
            },
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/consistent-type-assertions': 'warn',
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
        // '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',
        '@typescript-eslint/no-for-in-array': 'warn',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-unnecessary-condition': 'warn',
        '@typescript-eslint/no-unused-expressions': 'warn',
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],
        '@typescript-eslint/triple-slash-reference': 'error',

        // Specific rules that are enabled using @typescript-eslint, but have analogues in common eslint
        camelcase: 'off',
        'no-array-constructor': 'off',
        'no-unused-vars': 'off',
        'no-unused-expressions': 'off',
        'no-useless-constructor': 'off',
        'no-return-await': 'off',

        // Checked by Typescript - ts(2378)
        'getter-return': 'off',
        // Checked by Typescript - ts(2300)
        'no-dupe-args': 'off',
        // Checked by Typescript - ts(1117)
        'no-dupe-keys': 'off',
        // Checked by Typescript - ts(7027)
        'no-unreachable': 'off',
        // Checked by Typescript - ts(2367)
        'valid-typeof': 'off',
        // Checked by Typescript - ts(2588)
        'no-const-assign': 'off',
        // Checked by Typescript - ts(2588)
        'no-new-symbol': 'off',
        // Checked by Typescript - ts(2376)
        'no-this-before-super': 'off',
        // This is checked by Typescript using the option `strictNullChecks`.
        'no-undef': 'off',
        // This is already checked by Typescript.
        'no-dupe-class-members': 'off',
        // This is already checked by Typescript.
        'no-redeclare': 'off',

        // Checked by Typescript
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
