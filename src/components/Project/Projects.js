import React from 'react';
import Pcard from './Pcard';
import { CRow,CContainer,CCol } from '@coreui/react';
const details=[
  {
    source:require("../../Assets/Medsurplus.png"),
    link:'https://github.com/NomikaGajula/MEDSURPLUS',
    title:'MEDSURPLUS'
  },
  {
    source:require("../../Assets/CPA.png"),
      link:'https://github.com/NomikaGajula/Campus-Placement-Analyser',
      title:'Campus Placement Analyser'
  },
  {
  source:require("../../Assets/Melody.png"),
  link:'https://github.com/NomikaGajula/Melody_Master',
   title:'Melody Master'
  },
]
const project = () => {
return (
  <CContainer>
    <h1 className="purple">Projects</h1><br></br>
    <CRow>
    <CCol lg='4' md='6' sm='12' >
    <Pcard  details={details[0]} />
    </CCol>
    <CCol lg='4' md='6' sm='12' >
    <Pcard  details={details[1]} />
    </CCol>
    <CCol lg='4' md='6' sm='12' style={{marginleft:'5%'}} >
    <Pcard  details={details[2]}/>
    </CCol>  
    </CRow>
  </CContainer>
)
}
export default project;



