import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DiseasePage() {
  const allDiseases = [
    { title: 'Heart Attack', description: 'A heart attack occurs when the flow of blood to the heart is severely reduced or blocked.', image: 'src/assets/heartAttackImg.jpg' },
    { title: 'Cancer', description: 'Cancer is a disease in which some of the body\'s cells grow uncontrollably and spread to other parts of the body.', image: 'src/assets/cancerImg.jpg' },
    { title: 'Pneumonia', description: 'Pneumonia is a lung infection caused by bacteria, viruses, or fungi.', image: 'src/assets/pneumoniaImg.jpg' },
    { title: 'Obesity', description: 'Obesity is defined as abnormal or excessive fat accumulation that presents a risk to health.', image: 'src/assets/obesityImg.png' },
    { title: 'Diabetes', description: 'Diabetes is a chronic condition that affects how your body turns food into energy.', image: 'src/assets/diabetesImg.jpg' },
    { title: 'Stroke', description: 'A stroke occurs when the blood supply to part of your brain is interrupted.', image: 'src/assets/strokeImg.jpg' },
    { title: 'Alzheimer\'s', description: 'Alzheimer\'s is a progressive disease that destroys memory.', image: 'src/assets/alzheimersImg.jpg' },
    { title: 'Asthma', description: 'Asthma is a condition in which your airways narrow and swell.', image: 'src/assets/asthmaImg.jpg' },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // ฟิลเตอร์โรคตามคำค้นหา
  const filteredDiseases = allDiseases.filter(disease =>
    disease.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // คำนวณหน้าสุดท้าย
  const totalPages = Math.ceil(filteredDiseases.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedDiseases = filteredDiseases.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Container fluid className="px-4 py-5">
      <h2 className="text-center mb-4">ALL Diseases</h2>

      {/* Search Box */}
      <div className="d-flex justify-content-center mb-4">
        <Form.Control
          type="search"
          placeholder="Search diseases..."
          className="w-50 rounded-pill"
          style={{ backgroundColor: '#E0F4FF' }}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // รีเซ็ตไปหน้าแรกเมื่อค้นหา
          }}
        />
      </div>

      {/* แสดงรายการโรค */}
      <div className="row g-4">
        {selectedDiseases.length > 0 ? (
          selectedDiseases.map((disease, index) => (
            <div key={index} className="col-md-6 mb-4">
              <Link
                to={`/detail/${disease.title.toLowerCase().replace(/\s/g, '-')}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100">
                  <div className="row g-0">

                    {/* กำหนดขนาดรูปภาพให้เท่ากัน */}
                    <div className="col-md-4 d-flex align-items-center">
                      <img
                        src={disease.image}
                        className="img-fluid rounded"
                        alt={disease.title}
                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    </div>

                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{disease.title}</h5>
                        <p className="card-text">{disease.description}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No diseases found.</p>
        )}
      </div>


      {/* Pagination */}
      {filteredDiseases.length > 0 && (
        <div className="d-flex justify-content-center mt-4">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                  &laquo;
                </button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </Container>
  );
}

export default DiseasePage;
