

import { useRef } from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone, 
        faEnvelope, 
        faAddressBook,
        faBook,
        faEarth
       
      } from "@fortawesome/free-solid-svg-icons"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import "./Style.css"

function Style1 (props) {
  const pdfRef = useRef();
  const firstName=props.firstName;
  const lastName=props.lastName;
  const middleName=props.middleName;
  const age=props.age;
  const gmail=props.gmail;
  const address=props.address;
  const phoneNumber=props.phoneNumber;
  const about=props.about;
  const experiance=props.experiance;
  const education=props.education;
  const image=props.image;
  const downloadPDF=()=>{
    const input = pdfRef.current;
   

    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF("p","mm","a4",true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio)/2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG',imgX,imgY, imgWidth*ratio, imgHeight*ratio);
      pdf.save('CVv.pdf');
    })
   }
    return (
      <div ref={pdfRef} className="mainDiv">
        <div className="headerStyle1">
          <div className="imgCircle">
          <img src={image}/>
          </div>
          <div className="floatRight">
            <div className="name">
              <span className="styleStraight">{firstName}</span>
              <span className="styleStraight">{middleName}</span>
              <span className="styleStraight">{lastName}</span>  
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <span>{phoneNumber}</span>
              <FontAwesomeIcon icon={faAddressBook} />
              <span>{address}</span>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{gmail}</span> 
            <hr className="hr"/>
            </div>            
          </div> 
        </div>
        <div className="bodyPart">
          <div>
            <h4>About Me</h4>
            <p>{about}</p>
          </div>
          <div>
            <h4>Experience</h4>
            <p>{experiance}</p>
          </div>
          <div>
            <h4>Education</h4>
            <p>{education}</p>
          </div>
        </div>
      </div>
    )
  
}

export default Style1