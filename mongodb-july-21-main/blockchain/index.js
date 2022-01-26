const SHA256 = require('crypto-js/sha256');

/*
class Block {
	
	constructor() {
		console.log("Block constructor");
	}
	
}

new Block();
new Block();

data = {
	"from" : "A",
	"to" : "B",
	"amount" : 200
}

console.log(SHA256("100").toString());

console.log(SHA256(JSON.stringify(data)).toString());

*/

class Block {
	
	constructor(index, data, prevHash = '', nonce = 0) {
		this.index = index;
		this.data = data;
		this.prevHash = prevHash;
		this.hash = this.getHash();
		this.nonce = nonce;
	}
	
	getHash() {
		return SHA256(this.index + this.prevHash + this.nonce + this.data).toString();
	}
	
	mineBlock(difficulty) {
		while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
			this.nonce++;
			console.log(this.nonce);
			this.hash = this.getHash();
		}
		
		console.log(`Block mined: ${this.hash}`);
	}
	
	//"000TYUI345678" 3 000
	
}

class Blockchain {
	
	constructor(i, d, difficulty) {
		this.chain = [this.getGenesisBlock(i, d)];
		this.difficulty = difficulty;
	}
	
	getGenesisBlock(index, data) {
		return new Block(index, data);
	}
	
	addBlock(newBlock) {
		var latestBlock = this.chain[this.chain.length - 1];
		newBlock.prevHash = latestBlock.hash;
		newBlock.mineBlock(this.difficulty);
		this.chain.push(newBlock);
	}
	
	isChainValid() {
		for(let i=1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i];
			const prevBlock = this.chain[i-1];
			
			if(currentBlock.hash !== currentBlock.getHash()) {
				return false;
			}
			
			if(currentBlock.prevHash != prevBlock.hash) {
				return false;
			}
		}
		
		return true;
	}
}

tcetcoin = new Blockchain(1, 100, 3);
tcetcoin.addBlock(new Block(2, 2000));
tcetcoin.addBlock(new Block(3, 10000));

console.log(JSON.stringify(tcetcoin, null, 4));
console.log("Chain valid: " + tcetcoin.isChainValid());

//tempering data
tcetcoin.chain[1].data = 3000;
console.log(JSON.stringify(tcetcoin, null, 4));
console.log("Chain valid: " + tcetcoin.isChainValid());


//console.log(new Block(1, 100));
//console.log(new Block(2, 200));