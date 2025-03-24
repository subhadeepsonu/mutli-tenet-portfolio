import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './pages/portfoilio_v1'
import PortfolioV2 from './pages/portfolio_v2'
import PortfolioV3 from './pages/portfolio_v3'
// import PortfolioV4 from './pages/portfolio_v4'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio1" element={<Portfolio />} />
          <Route path="/portfolio2" element={<PortfolioV2 />} />
          <Route path="/portfolio3" element={<PortfolioV3 />} />
          {/* <Route path="/portfolio4" element={<PortfolioV4 />} /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
