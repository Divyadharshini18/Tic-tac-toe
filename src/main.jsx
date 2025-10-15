import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Square from './components/Square'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Square value={'X'} />
  </StrictMode>,
)
