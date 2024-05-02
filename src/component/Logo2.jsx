import SVG from "../assets/icons/svgviewer-output.svg";
import"../index.css";
const name = " Book an Appointment";
const Appointment = " Appointment Details";

function Logo2() {
  return (
    <div className="logo">
      <img className="logo2" src={SVG} width={150} height={150} alt="logo" />
      <h3 className="book2"> {name} </h3>
      <button className="Appointment-D2">{Appointment} </button>
      <form action="">
        <div className="form-flex">
          <div className="box-flex">
            <div className="input-label">
              <label> Name </label>
              <input className="form" type="text" />
            </div>
            <div className="input-label">
              <label > Email </label>
              <input className="form" type="text" />
            </div>
            <div className="input-label">
              <label > Date </label>
              <input className="form" type="text" />
            </div>
            <div className="input-label">
              <label > Appointment type</label>
              <select id="Appointment type" className="select form">
              <option value="selected"> </option>
              <option value="selected">Surgery </option>
              <option value="selected">Surgery </option>
                <option value="selected">Surgery </option>
              </select>
            </div>
          </div>

          <div className="div2">
            <div className="input-label">
              <label > Phon Number </label>
              <input className="form" type="text" />
            </div>
            <div className="input-label">
              <label > Gender</label>
              <select id="Gender" className="select form">
              <option value="selected"> </option>
              <option value="selected">Female </option>
                <option value="selected">Male </option>
              </select>
            </div>
            <div className="input-label">
              <label > Specialty</label>
              <select id="Specialty" className="select form">
              <option value="selected"> </option>
              <option value="selected">General Surgery </option>
              <option value="selected">General Surgery </option>
              <option value="selected">General Surgery </option>
              <option value="selected">General Surgery </option>
              <option value="selected">General Surgery </option>
                <option value="selected">General Surgery </option>
              </select>
            </div>
            <div className="input-label">
              <label > Doctor</label>
              <select id="Doctor" className="select form">
              <option value="selected"></option>
              <option value="selected">DR</option>
              <option value="selected">DR</option>
              <option value="selected">DR</option>
              <option value="selected">DR</option>
              <option value="selected">DR</option>
              <option value="selected">DR</option>
              <option value="selected">DR</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <button className="book-Appointment bookA2"><a href="./NewPage">Book Appointment</a></button>
    </div>
  )
}
export default Logo2
