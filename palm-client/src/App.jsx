import { useState } from 'react'


function App() {

  return (
    <main style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ padding: '10px', marginBottom: '0' }}>MyPrompter</h1>
      <div style={{ margin: '0', flexGrow: '1', overflow: 'scroll' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <article style={{ margin: '0' }} dangerouslySetInnerHTML={{ __html: serverData.html }} />
        </div>
      </div>
    </main>
  )
}

export default App
