import React, { Component } from 'react'
import Axios from 'axios';
import {Button,Navbar,Form,Nav,FormControl,Accordion,Card} from 'react-bootstrap';

 class Statedata extends Component {
     constructor(){
         super();
         this.state={stateData:{}}
     }
     componentDidMount(){
         Axios.get("https://api.covid19india.org/state_district_wise.json")
         .then(response=>{
             this.setState({stateData:response.data})
         });

         
     }
    render() {
        let keys=Object.keys(this.state.stateData);
        return (
            <div className="row">
                <div className="col-md-12">
                <Accordion>
                    {
                        keys.map((itm,ky)=> { 
                            
                            let districts=this.state.stateData[itm].districtData;
                            let district_keys=Object.keys(districts);
                            
                            return(<Card>
                                <Card.Header>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Click me!
                                  </Accordion.Toggle>
                                  {itm}
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                              </Card>) } )
                    
  
                            }
</Accordion>
                </div>
               
            </div>
        )
    }
}

export default Statedata
