import React from 'react';

class Customer extends React.Component{
    render() {
       return(
            <div>
                <CustomerProfile 
                    id={this.props.id}
                    image={this.props.image}
                    name={this.props.name}
                />
                <CustomerInfor
                    number={this.props.number}
                    gender={this.props.gender}
                    content={this.props.content}
                />
            </div>
       )
    }
}
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/> 
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfor extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.number}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.content}</p>
            </div>
        )

    }
}
export default Customer;