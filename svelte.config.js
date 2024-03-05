import sveltePreprocess from 'svelte-preprocess'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  kit: {
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
    }
  }
}
