import { Inter } from 'next/font/google'
import { MenuItem } from '../components/Menuitem'
import { CardGroup } from 'react-bootstrap'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
          
          <CardGroup>
              <MenuItem title="View Transcations" des="Display all your transcations" img="menu.jpg" page="viewTranscation"/>
              <MenuItem title="Add Transcation" des="Adding new transcation record" img="menu.jpg" page="addTranscation"/>
              <MenuItem title="Edit Transcation" des="Make changes to your transcation record" img="menu.jpg" page="editTranscation"/>
          </CardGroup>

    </>
  )
}
