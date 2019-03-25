import React,{Component} from 'react';

const TableHeader = (props) => {
    return(
        <thead>
            <tr>
                {props.values && props.values.map((item,index) => <th>{item}</th>)}
            </tr>
            {/* <tr>
                <th>
                    {props.value.one}
                </th>
                <th>
                    {props.value.two}
                </th>
                <th>
                    {props.value.three}
                </th>
            </tr> */}
        </thead>
    );
}

export default TableHeader;
