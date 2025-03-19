import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import zsslint from 'eslint-plugin-zss-lint';

const eslintConfig = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  zsslint.flatConfigs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  }
);

export default eslintConfig;
