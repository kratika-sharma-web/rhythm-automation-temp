import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FooterBar from './FooterBar'
import HomePage from './homePage'
import AboutUs from './AboutUs'
import Products from './Products'
import Services from './Services'
import Clients from './Clients'
import Careers from './Careers'
import ContactUs from './ContactUs'
import RechargeEV from './RechargeEV'

function App() {
  return (
    <>
      <Router>
        <div className='d-flex flex-column min-vh-100'>
          <header className='bg-white border-bottom sticky-top' style={{ zIndex: 1020 }}>
            <Header></Header>
          </header>
          <main className='flex-grow-1'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/aboutUs' element={<AboutUs />} />
              <Route path='/products' element={<Products />} />
              <Route path='/services' element={<Services />} />
              <Route path='/clients' element={<Clients />} />
              <Route path='/careers' element={<Careers />} />
              <Route path='/contactUs' element={<ContactUs />} />
              <Route path='/rechargeEV' element={<RechargeEV />} />
            </Routes>
          </main>
          <footer className='border-top text-center' style={{ zIndex: 1020 }}>
            <FooterBar />
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  )
}

export default App