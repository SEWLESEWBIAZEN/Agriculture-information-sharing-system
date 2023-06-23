import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function SubmitEmail() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Reset password for email: ${email}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="my-4">
        <Card className="w-100" style={{ maxWidth: '30rem' }}>
          <Card.Body>
            <Card.Title>submit Email</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="mb-3"
                />
                <Form.Text className="text-muted mb-3">
                  We'll send you an email with instructions to reset your password.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" className="mr-3 mt-3">
                Reset Password
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>

      <style type="text/css">
        {`
          @media (max-width: 576px) {
            .card {
              margin-top: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default SubmitEmail;