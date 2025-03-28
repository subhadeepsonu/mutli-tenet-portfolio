import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PortfolioV2 from './pages/portfolio_v2'
import PortfolioV3 from './pages/portfolio_v3'
import Home from './pages/Home'
import { useState } from 'react'
import PortfolioV1 from './pages/portfoilio_v1'


const queryClient = new QueryClient()
function App() {
  const [domain, setDomain] = useState(window.location.hostname.split(".")[0])


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/portfolio1" element={<PortfolioV1 />} />
          <Route path="/portfolio2" element={<PortfolioV2 />} />
          <Route path="/portfolio3" element={<PortfolioV3 />} /> */}
          <Route path="/" element={<Home domain={domain} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
