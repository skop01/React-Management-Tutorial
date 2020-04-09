import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
  root:{
    width : '100%',
    marginTop:theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth:800
  }
})
const customers = [
  {
  'id': 1,
  'image':'https://placeimg.com/64/64/any1',
  'name': '김홍주',
  'number': '10101',
  'gender': '남자',
  'content': '안녕하세요'
  },
  {
  'id': 2,
  'image':'https://placeimg.com/64/64/any2',
  'name': '홍주김',
  'number': '10102',
  'gender': '남자',
  'content': '배고파~'
  }, 
  {
  'id': 3,
  'image':'https://placeimg.com/64/64/any3',
  'name': '홍홍',
  'number': '10103',
  'gender': '남자',
  'content': '점심에 머 먹지~~?'
  }

]



class App extends Component{
render() {
   const { classes } = this.props;
  return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>몰라</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>내용</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map(c => {return(<Customer key={c.id} id={c.id} image={c.image} 
            name={c.name} number={c.number} gender={c.gender} content={c.content}/>)})}
          </TableBody>
        </Table>
         {/* <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          number={customers[0].number}
          gender={customers[0].gender}
          content={customers[0].content}
        />
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          number={customers[1].number}
          gender={customers[1].gender}
          content={customers[1].content}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          number={customers[2].number}
          gender={customers[2].gender}
          content={customers[2].content}
         /> */}
         
      </Paper>       
  );
}
}
export default withStyles(styles)(App);
