import { readFile } from 'node:fs/promises'
import { resolve, relative, extname } from 'node:path'

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
}

export const serve = (win, scheme, root) => {
  const base = resolve(root)
  win.registerProtocol(scheme, async req => {
    const url = new URL(req.url)
    const path = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html'
    const file = resolve(base, path)
    if (relative(base, file).startsWith('..')) {
      return { statusCode: 403, body: Buffer.from('Forbidden'), mimeType: 'text/plain' }
    }
    try {
      return {
        statusCode: 200,
        body: await readFile(file),
        mimeType: mime[extname(file)] || 'application/octet-stream',
      }
    } catch {
      return { statusCode: 404, body: Buffer.from('Not found'), mimeType: 'text/plain' }
    }
  })
}
