import express from 'express'

const app = express()

app.use(express.static('client'))

app.get('/events', (req, res) => {
  res.set({
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
  })

  const intervalId = setInterval(() => {
    const message = `data: ${new Date().toISOString()}\n\n`

    res.write(message)
    console.log(`[Server] Sent a message: ${message.trim()}`)
  }, 1000)

  req.on('aborted', () => {
    console.log('[Server] Client disconnected')
    clearInterval(intervalId)
  })
})

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000 \n\n')
})
