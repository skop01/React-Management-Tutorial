const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
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
            }] 
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));