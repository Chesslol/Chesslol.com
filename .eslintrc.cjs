module.exports = {
  root: true,
  parserOptions: {
    extraFileExtensions: ['.astro'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: ['dist/', '.astro/', 'node_modules/'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'prettier'
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'astro/no-set-html-directive': 'warn'
      }
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname
      },
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      rules: {
        '@typescript-eslint/consistent-type-imports': 'warn'
      }
    }
  ]
};
