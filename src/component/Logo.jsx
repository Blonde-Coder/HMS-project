import SVG from "../assets/icons/svgviewer-output.svg"
const name = " Book an Appointment"
const Appointment = " Appointment Details"

function Logo() {
  return (
    <div className="logo">
      <img src={SVG} width={150} height={150} alt="logo" />
      <h3 className="book"> {name} </h3>
      <button className="Appointment-D">{Appointment} </button>
      <h5>Enter Patient ID/Phone Number</h5>
                <form action="">
                    <input  className=" form1" type="text"/>
                   <button className="book-Appointment"><a href="./BookAppointment2"> Enter</a></button> 
                </form>
                
      </div>
  )
  }
export default Logo
