const sha256 = require('sha256');

function Blockchain (){
    this.chain = [];
    this.pendingTransactions = [];
    this.createNewBlock(100, 'great', 'greatful');
}

Blockchain.prototype.createNewBlock = function(nonce, prevBlockHash, hash){
    const NewBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transaction: this.pendingTransactions,
        nonce: nonce,
        prevBlockHash: prevBlockHash,
        hash: hash
    };
    this.pendingTransactions = [];
    this.chain.push(NewBlock);

    return NewBlock
}

Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const NewTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };
    this.pendingTransactions.push(NewTransaction);

    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function (previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);

    return hash;
} 

Blockchain.prototype.proofOfWork = function (previousBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    
    while(hash.substring(0,4) !== '0000'){
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        
        console.log(hash);
    }
    return nonce;
    

}


module.exports = Blockchain;