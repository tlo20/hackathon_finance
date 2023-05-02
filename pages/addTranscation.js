import { useRouter } from "next/router";
import { useState } from "react";
import { Form,Button } from "react-bootstrap";


export default function addTranscation() {

    const [amount, setAmount] = useState('')
    const [type, setType] = useState()
    const router = useRouter()

    function handleSubmit(e) {
       
        e.preventDefault()
        const msg = JSON.stringify({ "title": "Transcation Stored", "content": "Your transcation has been successfully recorded." })
        
        localStorage.setItem('msg', msg)

        router.push('message')
    }

    return <>
        <h5>Add New Transcation</h5>
        <Form onSubmit={ handleSubmit}>
            <Form.Group className="mb-3" controlId="amount" >
                <Form.Label>Transcation Amount ($)</Form.Label>
                <Form.Control type="number" value={amount} required onChange={(event) =>
                    setAmount(event.target.value)
                } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="type" >
                <Form.Label>Transcation Type</Form.Label>
                <Form.Select aria-label="Default select example" required value={type} step=".01" onChange={(event) =>
                    setType(event.target.value)
                }>
                    <option>Select...</option>
                    <option value="wage">Wage</option>
                    <option value="groceries">Groceries</option>
                    <option value="transport">Transport</option>
                    <option value="dinning">Dinning</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" >Submit</Button>
        </Form>
    </>
}