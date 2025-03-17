import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylefixlint from 'eslint-plugin-stylefix';

const eslintConfig = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  stylefixlint.flatConfigs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  }
);

export default eslintConfig;
