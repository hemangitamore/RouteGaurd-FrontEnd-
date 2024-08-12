// src/components/TripForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Form, Button } from 'react-bootstrap';

const TripForm = ({ onSubmit, trip }) => {
    const [formData, setFormData] = useState({
        VehicleID: '',
        DriverID: '',
        Source: '',
        Destination: '',
        DepartureTime: '',
        ArrivalTime: '',
        GoodsID: '',
        Status: '',
    });

    useEffect(() => {
        if (trip) {
            setFormData(trip);
        }
    }, [trip]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Card style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
            <Card.Body>
                <Card.Title>{trip ? 'Edit Trip' : 'Add Trip'}</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Vehicle ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="VehicleID"
                            value={formData.VehicleID}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Driver ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="DriverID"
                            value={formData.DriverID}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Source</Form.Label>
                        <Form.Control
                            type="text"
                            name="Source"
                            value={formData.Source}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control
                            type="text"
                            name="Destination"
                            value={formData.Destination}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Departure Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="DepartureTime"
                            value={formData.DepartureTime}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Arrival Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="ArrivalTime"
                            value={formData.ArrivalTime}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Goods ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="GoodsID"
                            value={formData.GoodsID}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            name="Status"
                            value={formData.Status}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="In Transit">In Transit</option>
                            <option value="Completed">Completed</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default TripForm;
