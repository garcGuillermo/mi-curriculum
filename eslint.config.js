/**
 * Configuración de ESLint para el proyecto "mi-curriculum".
 *
 * - Aplica reglas recomendadas de JavaScript y React.
 * - Usa plugins para React Hooks y Vite React Refresh.
 * - Distingue entre entorno frontend (browser) y backend/serverless (Node.js).
 *   - El código en src/ y componentes se analiza como browser.
 *   - El código en api/ se analiza como Node.js (soporta process, __dirname, etc).
 * - Ignora la carpeta dist/.
 *
 * Así se evitan falsos positivos de ESLint al usar variables globales de Node.js en funciones serverless,
 * manteniendo la seguridad y buenas prácticas en el frontend.
 */
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  // Configuración para archivos frontend (por defecto)
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['api/**'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  // Configuración específica para backend/serverless (api)
  {
    files: ['api/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
])
