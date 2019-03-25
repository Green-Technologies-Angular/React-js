import React,{Component} from 'react';

const TableBody = (props) => {
    return(
        <tbody>
            {props.values && props.values.map((item,index) => 
                <tr>
                    {Object.keys(item).map((key,index) => <td onClick={() => props.click(item[key])}>{item[key]}</td> )}
                </tr>)}
            {/* <tr>
                <td>
                    {props.value[0].one}
                </td>
                <td>
                    {props.value[0].two}
                </td>
                <td>
                    {props.value[0].three}
                </td>
            </tr>
            <tr>
                <td>
                    {props.value[1].one}
                </td>
                <td>
                    {props.value[1].two}
                </td>
                <td>
                    {props.value[1].three}
                </td>
            </tr> */}
        </tbody>
    );
}

export default TableBody;
