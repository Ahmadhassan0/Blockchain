const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const{v4: uuid} = require('uuid');
const Blockchain = require('./Blockchain');

const nodeAddress = uuid().split('-').join('');

const NewAge = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//This will give us complete Blockchian
app.get('/blockchain', function (req, res) {
  res.send(NewAge)
});

//This will give us new transaction
app.post('/transaction', function (req, res) {
  const blockIndex = NewAge.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({note: `This transaction will be added in ${blockIndex}`});
});

//Mine new block

app.get('/mine', function(req,res){

  const lastBlock = NewAge.getLastBlock();
  const previousBlockHash = lastBlock['hash'];

  const currentBlockData = {
    transaction: NewAge.pendingTransactions,
    transaction: lastBlock['index'] + 1

  }

  const nonce = NewAge.proofOfWork(previousBlockHash, currentBlockData);

  const blockHash = NewAge.hashBlock(previousBlockHash, currentBlockData, nonce);

  NewAge.createNewTransaction(10, '00000', nodeAddress);

  const newBlock = NewAge.createNewBlock(nonce, previousBlockHash, blockHash);

  res.json({
    note: "New block mined successfully",
    block: newBlock

  });
})

app.listen(3000, function (){
  console.log("server is running on port number 3000")});  