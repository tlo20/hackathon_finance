import { Button } from "react-bootstrap";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function message() {
    const [msgTitle, setMsgTitle] = useState('')
    const [msgContent, setMsgContent] = useState('')
    const router = useRouter()

    useEffect(() => {
        const temp = localStorage.getItem('msg')
      
        let msg_obj = JSON.parse(temp)
        setMsgTitle(msg_obj.title)
        setMsgContent(msg_obj.content)
    }
        , [])

    

    return <>
        <h5>{msgTitle}</h5>
        <p>
            {msgContent}
        </p>
        <Button onClick={() => { router.push('./')} }> Return to Main Page</Button>
    </>
}