import React, {Component} from 'react';
import Table from './tableComponent';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header : ["header1","header2","header3","header4","header5"],
            body : [{
                one : "body",
                two : "body",
                three : "body",
                four : "body",
                five : "body"
            },
            {
                one : "body",
                two : "body",
                three : "body",
                four : "body",
                five : "body"
            }]
        }
    }
    componentWillMount(){
        // fetch('http://www.snagfilms.com/apis/films.json?limit=10')
        // .then(function (response) {
        //     return response.json();
        // });
        // .then((myJson) => {
        //     this.setState({
        //         tHeader1,
        //         tBody1: body1,
        //         tHeader2,
        //         tBody2,
        //         apiResponse: JSON.stringify(myJson)
        //     })
        //     console.log(JSON.stringify(myJson));
        // });

    }
    cellClick = (value) => {
        alert(value);
    }
    nextPage = () => {
        this.props.history.push('/About');
    }
    render() {
        const {header,body} = this.state;
        return (
            <div>
                <button onClick={this.nextPage}>Next</button>
                <Table header={header} body={body} page="Home" cellClick={this.cellClick} />
            </div>
        );
    }
}

export default Home;