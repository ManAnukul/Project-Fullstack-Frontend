import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import dietImage from "../assets/Diet.png"; // Import the provided image

function DietPlanPage() {
  const [weight, setWeight] = useState("");
  const [days, setDays] = useState("");
  const [dailyEnergy, setDailyEnergy] = useState(0);
  const [recommendedEnergy, setRecommendedEnergy] = useState(0);

  const calculateEnergy = () => {
    if (weight && days) {
      const dailyKcal = weight * 30;
      const recommendedKcal = dailyKcal - 500;
      setDailyEnergy(dailyKcal);
      setRecommendedEnergy(recommendedKcal);
    }
  };

  return (
    <Container fluid className="px-4 py-5">
      <Row className="justify-content-center align-items-center">
        <Col lg={6} className="text-center">
          <h2 className="section-title mb-4">Exercise Program</h2>
          <div className="exercise-grid">
            <img
              src={dietImage}
              alt="Exercise Program"
              className="img-fluid rounded mx-auto d-block"
              style={{ width:"90%", height: "auto" }}
            />
          </div>
        </Col>

        <Col lg={6} className="text-center">
          <div className="diet-plan-form">
            <h2 className="section-title">Diet Planning</h2>
            <Form className="mt-4 mx-auto" style={{ maxWidth: "400px" }}>
              <Form.Group className="mb-4">
                <Form.Label>Target weight (kg.)</Form.Label>
                <Form.Control
                  type="number"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                    calculateEnergy();
                  }}
                  placeholder="Enter your target weight"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Number Of Days</Form.Label>
                <Form.Control
                  type="number"
                  value={days}
                  onChange={(e) => {
                    setDays(e.target.value);
                    calculateEnergy();
                  }}
                  placeholder="Enter number of days"
                />
              </Form.Group>

              <div className="energy-info">
                <div className="energy-card mb-3">
                  <h6>Daily energy intake (kcal)</h6>
                  <div className="energy-value">{dailyEnergy}</div>
                </div>
                <div className="energy-card">
                  <h6>Recommended daily energy intake (kcal)</h6>
                  <div className="energy-value">{recommendedEnergy}</div>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DietPlanPage;
