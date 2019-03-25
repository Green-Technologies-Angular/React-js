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
    nextPage = () => {
        this.props.history.push('/About');
    }
    render() {
        const {header,body} = this.state;
        return (
            <div>
                <button onClick={this.nextPage}>Next</button>
                <h1>Home</h1>
                <Table header={header} body={body} />
            </div>
        );
    }
}

export default Home;