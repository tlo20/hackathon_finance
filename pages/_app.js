import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap'

export default function App({ Component, pageProps }) {
    return <Container><h1>Finance App</h1><Component {...pageProps} /></Container>
        
}
