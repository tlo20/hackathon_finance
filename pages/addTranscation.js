import { Form,Button } from "react-bootstrap";

export default function addTranscation() {
    return <>
        <h5>Add New Transcation</h5>
        <Form>
            <Form.Group className="mb-3" controlId="c1">
                <Form.Label>Transcation Amount ($)</Form.Label>
                <Form.Control type="number" id="amount"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="c2">
                <Form.Label>Transcation Type</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select...</option>
                    <option value="wage">Wage</option>
                    <option value="groceries">Groceries</option>
                    <option value="transport">Transport</option>
                    <option value="dinning">Dinning</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                </Form.Select>
            </Form.Group>
            <Button>Submit</Button>
        </Form>
    </>
}