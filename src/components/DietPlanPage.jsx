import { useState } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import dietImage from "../assets/Diet.png"; // Import the provided image

function DietPlanPage() {
  const [weight, setWeight] = useState("");
  const [days, setDays] = useState("");
  const [selectedExercise, setSelectedExercise] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [dailyEnergy, setDailyEnergy] = useState(0);
  const [recommendedEnergy, setRecommendedEnergy] = useState(0);

  const exercises = [
    "Jumping jacks",
    "Wall sit",
    "Push-up",
    "Abdominal crunch",
    "Step-up on to chair",
    "Squat",
    "Triceps dip on chair",
    "Plank",
    "High knees running in place",
    "Lunge",
    "Push-up and rotation",
    "Side plank",
  ];

  const calculateExercisePlan = () => {
    if (weight && days && selectedExercise) {
      const baseReps = 10; // Base number of reps for calculation
      const baseSets = 3; // Base number of sets for calculation
      const intensityFactor = weight / 50; // Adjust intensity based on weight

      setReps(Math.round(baseReps * intensityFactor));
      setSets(Math.round(baseSets * (days / 7)));
      setDailyEnergy(Math.round(weight * 30)); // Example calculation for daily energy
      setRecommendedEnergy(Math.round(weight * 35)); // Example calculation for recommended energy
    }
  };

  return (
    <Container fluid className="px-4 py-5">
      <Row className="justify-content-center align-items-center align-content-center">
        <Col lg={6} className="text-center">
          <h2 className="section-title mb-4">Exercise Program</h2>
          <Card className="shadow-sm border-0 p-3">
            <Card.Img
              src={dietImage}
              alt="Exercise Program"
              className="img-fluid rounded mx-auto d-block"
              style={{ width: "100%", height: "auto" }}
            />
          </Card>
        </Col>

        <Col lg={6} className="text-center">
          <Card className="shadow-sm border-0 p-5">
            <h2 className="section-title">Exercise Planning</h2>
            <Form className="mt-4 mx-auto" style={{ maxWidth: "70vh" }}>
              <Form.Group className="mb-4">
                <Form.Label>Target weight (kg.)</Form.Label>
                <Form.Control
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your target weight"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Number Of Days</Form.Label>
                <Form.Control
                  type="text"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  placeholder="Enter number of days"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Select Exercise</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedExercise}
                  onChange={(e) => setSelectedExercise(e.target.value)}
                >
                  <option value="">Select an exercise</option>
                  {exercises.map((exercise, index) => (
                    <option key={index} value={exercise}>
                      {exercise}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button
                onClick={calculateExercisePlan}
                className="btn-primary mb-4 w-100"
              >
                Calculate Plan
              </Button>

              {sets > 0 && reps > 0 && (
                <Row className="mt-4 d-flex justify-content-between">
                  <Col md={6} className="d-flex justify-content-center">
                    <Card
                      className="shadow-sm border-0 p-4 w-100"
                      style={{
                        minHeight: "230px"
                      }}
                    >
                      <h6 className="text-primary">Selected Exercise</h6>
                      <p>{selectedExercise}</p>
                      <p>
                        Recommended Sets: <strong>{sets}</strong>
                      </p>
                      <p>
                        Recommended Reps per Set: <strong>{reps}</strong>
                      </p>
                    </Card>
                  </Col>
                  <Col md={6} className="d-flex justify-content-center">
                    <Card
                      className="shadow-sm border-0 p-4 w-100"
                      style={{ minHeight: "230px",
                       }}
                    >
                      <h6 className="text-primary">Energy Intake Summary</h6>
                      <p>
                        Daily Energy Intake: <strong>{dailyEnergy} kcal</strong>
                      </p>
                      <p>
                        Recommended Daily Energy Intake:{" "}
                        <strong>{recommendedEnergy} kcal</strong>
                      </p>
                    </Card>
                  </Col>
                </Row>
              )}
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DietPlanPage;
