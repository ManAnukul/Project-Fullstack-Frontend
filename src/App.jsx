import { Container, Nav, Navbar } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import DietPlanPage from './components/DietPlanPage'
import DetailPage from './Detail.jsx';
import DiseasePage from './components/DiseasePage'
import AboutUs from './components/AboutUs.jsx';
import './App.css'

function HomePage() {
  const recommendations = [
    {
      title: 'Heart Attack',
      description: 'A heart attack occurs when the flow of blood to the heart is severely reduced or blocked.',
      image: 'src/assets/heartAttackImg.jpg'
    },
    {
      title: 'Cancer',
      description: 'Cancer is a disease in which some of the body\'s cells grow uncontrollably and spread to other parts of the body.',
      image: 'src/assets/cancerImg.jpg'
    },
    {
      title: 'Pneumonia',
      description: 'Pneumonia is a lung infection caused by bacteria, viruses, or fungi. It causes inflammation that needs to be treated promptly.',
      image: 'src/assets/pneumoniaImg.jpg'  
    },
    {
      title: 'Obesity',
      description: 'Obesity are defined as abnormal or excessive fat accumulation that presents a risk to health.',
      image: 'src/assets/obesityImg.png'
    }
  ]

  return (
    <div>
      <header className="header-banner">
        <img 
          src="src/assets/stethoscope.png"
          alt="Medical Banner" 
          className="w-100" 
          style={{ height: '400px', objectFit: 'cover' }} 
        />
      </header>
      
      <Container fluid className="px-4 py-5">
        <h2 className="section-title">Recommend</h2>
        <div className="row g-4">
          {recommendations.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100">
                <Link to={`/detail/${item.title.toLowerCase().replace(/\s/g, '-')}`} className="text-decoration-none text-dark">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title text-start">{item.title}</h5>
                    <p className="card-text text-start">{item.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center my-5 py-4">
          <h2 className="about-title">About<br />US</h2>
          <p className="mx-auto" style={{ maxWidth: '800px', color: '#636e72' }}>
            At HelptoHeal, we are dedicated to providing you with reliable and comprehensive information 
            about various diseases to empower you to take charge of your health.
          </p>
        </div>
      </Container>
    </div>
  )
}

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar expand="lg" className="mb-0">
        <Container fluid className="px-4">
          <Navbar.Brand as={Link} to="/" className="brand-text">Help to Heal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/disease">Disease</Nav.Link>
              <Nav.Link as={Link} to="/diet-plan">Diet Plan</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/disease" element={<DiseasePage />} />
          <Route path="/diet-plan" element={<DietPlanPage />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </main>

      <footer>
        <Container fluid className="px-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-start">
              <span className="brand-text">Help to Heal</span>
            </div>
            <div className="text-end">
              <div className="mb-3" style={{ color: '#2d3436', fontWeight: 500 }}>Follow Us</div>
              <div className="social-links">
                <a href="https://www.facebook.com/man.duagjampa" className="me-4"><FaFacebook /></a>
                <a href="https://www.instagram.com/anukxl.dp/" className="me-4"><FaInstagram /></a>
                <a href="https://www.x.com" className="text-dark"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default App