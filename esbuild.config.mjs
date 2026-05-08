import { build, context } from 'esbuild';

const watch = process.argv.includes('--watch');
const minify = !watch && process.argv.includes('--production');

const opts = {
  entryPoints: ['src/extension.ts'],
  bundle: true,
  outfile: 'dist/extension.js',
  external: ['vscode'],
  format: 'cjs',
  platform: 'node',
  target: 'node18',
  sourcemap: !minify,
  minify,
  legalComments: 'none',
  logLevel: 'info',
};

if (watch) {
  const ctx = await context(opts);
  await ctx.watch();
  console.log('[esbuild] watching for changes…');
} else {
  await build(opts);
}
