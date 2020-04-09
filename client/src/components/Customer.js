import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render() {
       return(
           <TableRow>
               <TableCell>{this.props.id}</TableCell>
               <TableCell><img src={this.props.image} alt="profile"></img></TableCell>
               <TableCell>{this.props.name}</TableCell>
               <TableCell>{this.props.number}</TableCell>
               <TableCell>{this.props.gender}</TableCell>
               <TableCell>{this.props.content}</TableCell>
           </TableRow>
            // <div>
            //     <CustomerProfile id={this.props.id}
            //         image={this.props.image} name={this.props.name}/>
            //     <CustomerInfor number={this.props.number}
            //         gender={this.props.gender} content={this.props.content}/>
            // </div>
       )
    }
}
// class CustomerProfile extends React.Component{
//     render(){
//         return(
//             <div>
//                 <img src={this.props.image} alt="profile"/> 
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfor extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p>{this.props.number}</p>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.content}</p>
//             </div>
//         )

//     }
// }
export default Customer;