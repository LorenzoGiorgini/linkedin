import { Container , Row , Col } from "react-bootstrap"
import Jumbo from "../components/Jumbo"
import SideBar from "../components/SideBar"
import { useEffect , useState } from 'react';




const Profile = () => {

    const [ user , setFetch ] = useState([])
    const [ mainUser , setMainUser] = useState("me")

    const fetchUser = async () => {
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/profile/" + mainUser,
                {
                  headers: {
                    Authorization:
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU",
                  },
                }
              );
            let data = await response.json();
            if(response.ok) {
                setFetch(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    

    useEffect(() => {
        fetchUser()
    }, [mainUser])

    return(
        <Container style={{marginTop : "100px"}}>
            <Row>
                <Col md={8} style={{height: "100%"}}>
                    <Jumbo  user={user}/>
                </Col>
                
                <Col md={4}>
                    <SideBar mainUser={mainUser} setMainUser={setMainUser}/>
                </Col>
            </Row>
        </Container>
    )
    
}

export default Profile