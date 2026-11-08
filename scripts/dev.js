import spawn from 'cross-spawn'

process.env.NODE_ENV = 'development'

spawn('vite', { stdio: 'inherit' })

await new Promise(resolve => setTimeout(resolve, 1000))

spawn('deno', ['-A', 'src-main/index.js'], { stdio: 'inherit' })
