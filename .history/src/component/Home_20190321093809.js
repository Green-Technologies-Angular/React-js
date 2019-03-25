import React, {Component} from 'react';
import Table from './component/tableComponent';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header : {
                one : "header1",
                two : "header2",
                three : "header3"
            },
            body : [{
                one : "body1",
                two : "body2",
                three : "body3"
            },
            {
                one : "body4",
                two : "body5",
                three : "body6"
            }]
        }
    }
    
    render() {
        const {header,body} = this.state;
        return (
            <div>
                <Table header={header} body={body} />
            </div>
        );
    }
}

export default Home;