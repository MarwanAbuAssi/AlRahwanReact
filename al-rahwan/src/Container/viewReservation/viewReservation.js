import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

class viewReservation extends Component {
componentDidMount(){

if(this.props.show){
    this.setState({visible: true});
}
}
    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick(event) {
        this.setState({visible: true});
    }

    onHide(event) {
        this.setState({visible: false});
        this.props.hide();
    }

    render() {
        console.log(this.props.show)
        const footer = (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={this.onHide}/>
                <Button label="No" icon="pi pi-times" onClick={this.onHide}/>
            </div>
        );

        return (
            <div>
                <div className="content-section implementation">
                    <Dialog header="Godfather I" visible={this.state.visible} width="500px" modal={true} footer={footer}
                            minY={70} onHide={this.onHide} maximizable={true}>
                        <div>{this.props.reservationTitle}</div>
                        Date :
                        <div>{this.props.reservationDate}</div>
                        Time :
                        <div>{this.props.reservationTime}</div>
                        Area :
                        <div>{this.props.reservationArea}</div>
                        Number of Attendees :
                        <div>{this.props.reservationNumberOA}</div>
                    </Dialog>
                    <a label="Show" onClick={this.onClick}>Continue</a>
                </div>
            </div>
        )
    }
}

export default viewReservation;