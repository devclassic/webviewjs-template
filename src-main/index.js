import { Application } from '@webviewjs/webview'
import { serve } from './protocol.js'
import { join } from 'path'

const isDev = process.env.NODE_ENV === 'development'

const app = new Application()

const win = app.createBrowserWindow({
  title: '测试窗口',
  width: 640,
  height: 480,
  visible: false,
})

win.center()

let url = ''

if (isDev) {
  url = 'http://localhost:5173'
} else {
  if (typeof Bun !== 'undefined') {
    serve(win, 'app', join(import.meta.dirname, 'ui'))
  }

  if (typeof Deno !== 'undefined') {
    serve(win, 'app', join(import.meta.dirname, '..', 'ui'))
  }

  url = 'app://localhost'
}

const view = win.createWebview({ url, enableDevtools: isDev })

view.on('page-load-finished', () => {
  win.show()
  win.focus()
})

view.expose('api', {
  hello: 'hello world',
})

app.run()
