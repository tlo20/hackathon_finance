import { Card, Button } from 'react-bootstrap'
import { useRouter } from 'next/router';

export function Menuitem(props) {

    const router = useRouter()

    function goto() {
        router.push(props.page)
    }

    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.des}
                </Card.Text>
                <Button variant="primary" onClick={goto}>Enter</Button>
            </Card.Body>
        </Card>
    </>
}