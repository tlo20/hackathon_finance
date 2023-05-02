import { Inter } from 'next/font/google'
import  Menuitem from '../components/Menuitem'
import { CardGroup } from 'react-bootstrap'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
          
          <CardGroup>
              <Menuitem title="View Transcations" des="Display all your transcations" img="menu.jpg" page="viewTranscation"/>
              <Menuitem title="Add Transcation" des="Adding new transcation record" img="menu.jpg" page="addTranscation"/>
              <Menuitem title="Edit Transcation" des="Make changes to your transcation record" img="menu.jpg" page="editTranscation"/>
          </CardGroup>

    </>
  )
}
