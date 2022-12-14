const Blockchain = require('./Blockchain');

const NewAge = new Blockchain();
/*
NewAge.createNewBlock(111, 'fia', 'doubledd');
NewAge.createNewBlock(123, 'rrr', 'ddd');

NewAge.createNewTransaction(100, 'blablanjnjblsa', 'rarjnnjnnjnjnjarara');
NewAge.createNewTransaction(23100, 'bllllablablsa', 'rarcbgbarara');
NewAge.createNewTransaction(10540, 'blabljnjlablsa', 'raranmnrara');

NewAge.createNewTransaction(100, 'blablablsa', 'rararara');
NewAge.createNewTransaction(100, 'blablablsa', 'rararara');
NewAge.createNewTransaction(100, 'blablablsa', 'rararara');


NewAge.createNewBlock(999, 'adsfg', 'dsaf');
NewAge.createNewBlock(99955, 'adsfg', 'dsaf');
NewAge.createNewBlock(55, 'adsfg', 'dsaf');
NewAge.createNewBlock(22, 'adsfg', 'dsaf');
NewAge.createNewBlock(59, 'adsfg', 'dsaf');
NewAge.createNewBlock(92, 'adsfg', 'dsaf');
NewAge.createNewBlock(47, 'adsfg', 'dsaf');

NewAge.createNewTransaction(100, 'blablablsa', 'rararara');
NewAge.createNewTransaction(100, 'blablablsa', 'rararara');
NewAge.createNewTransaction(100, 'blablablsa', 'rararara');
*/

const previousBlockHash = 'AFDHKSDKGTKGFDS:FICEKINGICEKING';
const currentBlockData = [
    {
        amount:10,
        sender: 'SHAFAQATUNCLE',
        recipient: 'RIZWANA',
    },
    {
        amount:99056625,
        sender: 'GDGHKNDGJJKFROPENLSDDGJSLDFHJ',
        recipient: 'RIZWANKGJDSIDJASKFJAWIKDJASKFNQWAJRIAWDJa',
    },
];

const nonce = 1234



console.log(NewAge.proofOfWork(previousBlockHash, currentBlockData,));
