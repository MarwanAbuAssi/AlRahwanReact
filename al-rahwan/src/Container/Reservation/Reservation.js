import React, {Component} from 'react'
import ViewReservation from '../viewReservation/viewReservation'
import classes from './Reservation.css'
class Reservation extends Component {
    state = {
        show: false
    }
    handelHide=()=>{
         this.setState({show:false});
    }

    render() {

let view =null;
if(this.state.show){
    view =<ViewReservation show={this.state.show}
                           hide={this.handelHide}
    ></ViewReservation>
}
        return (

            <div>{view}
                <div id="mainDiv">
                    <form id="reservationForm">
                        <div className="welcomeDiv">Welecome To Reservation System</div>
                        <label>Reservation Title:</label>
                        <input className="reFormInput" type="text" required></input>
                        <label>Please choose the date and time for booking</label>
                        <br/>
                        <label>Date:</label>
                        <input className="reFormInput" type="date" required min="2000-01-02"></input>
                        <label>Time:</label>
                        <input className="reFormInput" type="time" required></input>
                        <lable> Please choose which Area you want to book:</lable>
                        <br/>
                        <input type="checkbox"></input>Area 1<br/>
                        <input type="checkbox"></input>Area 2<br/>
                        <input type="checkbox"></input>Area 3
                        <br/> <br/>
                        <label>Number of Attendees:</label>
                        <input className="reFormInput" type="text" required></input>
                        <lable>Additions:</lable>
                        <br/>
                        <input type="checkbox"></input>coffe<br/>
                        <input type="checkbox"></input>Tea<br/>
                        <input type="checkbox"></input>Cake<br/>
                        <input type="checkbox"></input>Boza<br/>
                        <input type="checkbox"></input>Knava<br/>
                        <lable>Note:</lable>
                        <textarea className="reFormInput" rows="3" type="text"></textarea>
                        <div className='buttonsDiv'>
                            <div className='submitText' onClick={() => {
                                this.setState({show: true})
                                console.log(this.state.show)

                            }}>Continue
                            </div>
                            <div className='canelText'>Cancel</div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Reservation;