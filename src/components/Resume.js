import Resume_New from "./Nomika_Resume.pdf";
export default function Resume(){
   
    return (
        <div>
        <a
          href={Resume_New}
          download="Nomika_Resume"
          target="_blank"
          rel="noreferrer"
          style={{color:'white',
          backgroundColor:'black',
          textDecoration:'none',
          border:'1.3px solid #cd5ff8',
          fontSize:'20px',
          boxShadow: '0 0 3.5px 3.5px #cd5ff8',
          padding:'8px',
          borderRadius:'7px'}}
          >
         Download Resume
        </a>
      </div>
         
      
    )
}