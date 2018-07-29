import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/components/column/Column";
import {InputText} from "primereact/components/inputtext/InputText";
import axiosServise from '../../Services/axiosService';
import {connect} from 'react-redux'
import * as actions from '../../store/action/actionTypes'

class dataTabel extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            tabelData: null


        };
    }

    componentWillMount() {
        this.props.onGetData([{name:"marwan"}, {name:"marwan"}])
        console.log(this.props.loader)
        console.log(this.props.loader)
        console.log(this.props.loader)
        console.log(this.props.loader)
        // this.getData();
        //
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosServise.get("https://alrahwanreact.firebaseio.com/reservation.json")
            .then(response => {
                let reser = []
                for (let i in response.data) {
                    let obj = {}
                    for (let j in response.data[i]) {
                        obj = {...obj, [response.data[i][j].name]: response.data[i][j].value}
                    }
                    reser.push(obj)

                }
                this.setState({tabelData: reser, loading: false})
            })
            .catch(error => {
                console.log(error)
            });
        ;
    }

    render() {

        var header = <div style={{'textAlign': 'left'}}>
            <i className="fa fa-search" style={{margin: '4px 4px 0 0'}}></i>
            <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})}
                       placeholder="Global Search" size="50"/>
        </div>;

        const columns = [
            {field: 'title', header: 'title'},
            {field: 'date', header: 'Date'},
            {field: 'timeFrom', header: 'Start Time'},
            {field: 'timeTo', header: 'End Time'},
            {field: 'numberOfAttendes', header: 'Number Of Attendes'},
            {field: 'note', header: 'Note'}
        ];

        const dynamicColumns = columns.map((col, i) => {
            return <Column sortable={true} key={col.field} field={col.field} header={col.header}/>;
        });

        return (
            <div>


                <div className="content-section implementation">
                    <DataTable loading={this.state.loading} header={header} globalFilter={this.state.globalFilter}
                               sortMode="multiple" rows={10}
                               value={this.state.tabelData} paginator={true}
                    >
                        {dynamicColumns}
                    </DataTable>


                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        reservationArray: state.reservationArray,
        loader: state.loader
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetData: (data) => dispatch({type: actions.GET_DATA,data:data})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(dataTabel);