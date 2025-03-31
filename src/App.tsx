import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home domain={window.location.hostname.split(".")[0]} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App