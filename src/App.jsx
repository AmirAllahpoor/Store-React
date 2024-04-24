import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { QueryClient , QueryClientProvider } from "react-query"
import MyNavbar from "./components/navbar"
import HomePage from "./components/home"
import NotFound from "./components/notfound"
import LoginPage from "./components/login"
import DashboardPage from "./components/dashboard"
import StorePage from "./components/store"
import ProductPage from "./components/product"

function App() {

  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/:id" element={<ProductPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </QueryClientProvider>
  )
}

export default App
