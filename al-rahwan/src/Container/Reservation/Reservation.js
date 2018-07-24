import React, {Component} from 'react'
import ViewReservation from '../viewReservation/viewReservation'
import Input from '../../Components/Input/Input'
import "./Reservation.css"

class Reservation extends Component {

    state = {
        show: false,
        controls: {
            title: {
                label: "Please Enter The Title Of The Event",
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Title. ex afrah al ramdan',
                },
                value: ''

            },
            date: {
                label: "Date of the event From",
                elementType: 'input',
                elementConfig: {
                    type: 'date'
                },
                value: ""

            },
            timeFrom: {
                label: "The event is Start on",
                elementType: 'input',
                elementConfig: {
                    type: 'time'
                },
                value: ""

            }, timeTo: {
                label: "and end on hour",
                elementType: 'input',
                elementConfig: {
                    type: 'time'
                },
                value: "17:00:pm"

            },
            areas: {
                label: "Additions:",
                elementType: 'checkbox',
                elementConfig: {
                    type: 'checkbox',
                    options: [
                        {
                            displayValue: "area1",
                            value: true
                        },
                        {
                            displayValue: "area2",
                            value: true
                        },
                        {
                            displayValue: "area3",
                            value: false
                        }

                    ],
                }
            },
            numberOfAttendes: {
                label: "Expected Number of Attendees",
                elementType: 'input',
                elementConfig: {
                    type: "text",
                    placeholder: "ex:1000 person/>>>"
                },
                value: ""

            },
            Additions: {
                label: "Additions:",
                elementType: 'checkbox',
                elementConfig: {
                    type: 'checkbox',
                    options: [
                        {
                            displayValue: "cacke",
                            value: true
                        },
                        {
                            displayValue: "coffe",
                            value: true
                        }, {
                            displayValue: "ice creem",
                            value: false
                        }, {
                            displayValue: "coola",
                            value: true
                        }, {
                            displayValue: "juci",
                            value: true
                        }

                    ],
                }
            },
            note: {
                label: "Note( description ...   )",
                elementType: 'textarea',
                elementConfig: {
                    type: "text",
                    placeholder: "addtion flower"
                },
                value: ""

            }
        }
    }


    handelCheckbox = (index, id) => {
        let values = this.state.controls[id].elementConfig.options;
        values[index].value = !this.state.controls[id].elementConfig.options[index].value;
        const updateFormElement = {
            ...this.state.controls,
            [id]: {
                ...this.state.controls[id],
                elementConfig: {...this.state.controls[id].elementConfig, options: values}
            }
        }
        this.setState({controls: updateFormElement})
    }
    submitHandler = () => {

        let data = [];
        for (let item in this.state.controls) {

            if (this.state.controls[item].elementConfig.options !== undefined) {
                const val = this.state.controls[item].elementConfig.options;
                data.push(
                    {name: item, value: val}
                )


            } else {
                const val = this.state.controls[item].value
                data.push(
                    {name: item, value: val}
                )
            }

        }
    }

    inputChangedHandler = (event, controlName) => {
        let updateForm;
        if (controlName === 'checkbox') {
            updateForm = {
                ...this.state.controls,
                [controlName]: {
                    ...this.state.controls[controlName],
                    value: event.target.value
                }
            }
        }
        else {
            updateForm = {
                ...this.state.controls,
                [controlName]: {
                    ...this.state.controls[controlName],
                    value: event.target.value
                }
            }
        }

        this.setState({controls: updateForm})

    };


    handelHide = () => {
        this.setState({show: false});
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = (
            <div>
                {formElementsArray.map(formElement => (
                    <Input
                        handelCheckbox={() => {
                        }}
                        label={formElement.config.label}
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        value={formElement.config.value}
                        elementConfig={formElement.config.elementConfig}
                        changed={(event) => {
                            this.inputChangedHandler(event, formElement.id)
                        }}
                        handelCheckbox={(index) => {
                            this.handelCheckbox(index, formElement.id)
                        }}
                    />
                ))}
            </div>
        );
        let view = null;
        if (this.state.show) {
            view = <ViewReservation show={this.state.show}
                                    hide={this.handelHide}
            ></ViewReservation>
        }
        return (

            <div className=" " id="mainDiv">{view}
                <div id="reservationForm">
                    <div className="welcomeDiv">Welcome To our Reservation System</div>
                    <form>
                        {form}
                        <div style={{textAlign: "center"}}>
                            <button onClick={(e) => {
                                this.submitHandler()
                                e.preventDefault()
                            }} className="submitText">Submit
                            </button>
                            <button className="canelText">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Reservation;