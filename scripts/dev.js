import spawn from 'cross-spawn'

process.env.NODE_ENV = 'development'

spawn('vite', { stdio: 'inherit' })

spawn('deno', ['-A', 'src-main/index.js'], { stdio: 'inherit' })
