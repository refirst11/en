import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import plumeria from '@plumeria/eslint-plugin';

const eslintConfig = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  plumeria.flatConfigs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  }
);

export default eslintConfig;
