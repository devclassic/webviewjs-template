import spawn from 'cross-spawn'
import fse from 'fs-extra'
import { program } from 'commander'
import os from 'os'

process.env.NODE_ENV = 'production'

spawn.sync('vite', ['build'], { stdio: 'inherit' })

fse.removeSync('dist')

program.option('--runtime <string>', 'runtime', 'deno').action(opts => {
  switch (opts.runtime) {
    case 'deno':
      spawn.sync(
        'deno',
        [
          'compile',
          '-A',
          '--node-modules-dir=none',
          '--exclude-unused-npm',
          os.platform() === 'win32' ? '--no-terminal' : false,
          os.platform() === 'win32' ? '--icon=icons/icon.ico' : false,
          '--engine=quickjs',
          '--include=ui',
          `-o=dist/hello`,
          'src-main/index.js',
        ].filter(Boolean),
        { stdio: 'inherit' },
      )
      break
    case 'bun':
      spawn.sync(
        'bun',
        [
          'build',
          '--minify',
          '--compile',
          os.platform() === 'win32' ? '--windows-hide-console' : false,
          os.platform() === 'win32' ? '--windows-icon=icons/icon.ico' : false,
          '--asset=ui',
          '--outfile=dist/hello',
          'src-main/index.js',
        ].filter(Boolean),
        { stdio: 'inherit' },
      )
      break
    default:
      console.log('unknow runtime')
      break
  }
})

program.parse()
