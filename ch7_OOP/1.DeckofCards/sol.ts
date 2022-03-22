// who's going to play it ? player and dealer, how many games? 1, 
// hand (value), card (suit, number),  deck (cards ) , dealer( money, hand), player (money, hands), table (1 host,players). game ( cardvalue(), )

// a deck is a group of cards (have an array of cards that are all unique) 
// card has a suit and a number 
// a hand has many cards
// a player could have many hands -- 1 for now
// a table has one dealer and many players
// player and dealer might inherit from a person, or a dealer might inherit from a player


// player goes into a casino
// sits on a table
// make bet
// dealer deals for the players on the table and himself
// a player checks his hand value and ask for a card or not
// if hand value exceed 21 player loses or less than the dealer else he wins 


type csymbol = 'A' | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'J' | 'Q' | 'K' | '🃏'

type suit = '♠' | '♥' | '♦' | '♣' | '🃟' 
class Card{
    suit: suit
    number: csymbol
	constructor(suit: suit, number: csymbol){
		this.suit = suit
		this.number = number
	}
}

class Deck{
	private static symbols: csymbol[] = ['A' , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 'J' , 'Q' , 'K' ]
	public cardStack: Card[] = []
	
	private static suits: suit[] = [ '♠' , '♥' , '♦' , '♣']
	constructor(numDeck: number = 1,  joker: boolean = false){
		for(let i =0; i< numDeck; i++){
            for(let su of Deck.suits){
                for (let sym of Deck.symbols){
                    this.cardStack.push(new Card(su, sym))
                }
            }
        }
	}
	shuffle(n: number = this.cardStack.length * 10){
		for( let i= 0; i < n; i++)
		{
			let rando1 =  Math.floor( Math.random() * this.cardStack.length) 
			let rando2 =  Math.floor( Math.random() * this.cardStack.length) 
			let temp = this.cardStack[ rando1]
			this.cardStack[rando1] = this.cardStack[ rando2]
			this.cardStack[rando2] = temp
		}
	}
	
	getCard(){
		return this.cardStack.pop()	
	}
	
	
}

class Hand{
	cards: Card[] = []
	addCard(card: Card){
		this.cards.push(card)
	}
}	

class Player{
	hand: Hand
	money: number 
	constructor(){
		this.money = 1000
		this.hand = new Hand()
	}

	checkHandValue(game: Game){
		return game.handValue(this.hand)
	}

}
abstract class Game{
    static GameType = ['black jack', 'Poker']
    handValue(hand: Hand){}

}

class Dealer extends Player{
	
	constructor(){
		super();
	}
	
	deal(deck: Deck){
		return deck.getCard()
	}
}

class Table{
	dealer: Dealer
	players: Player[] = []
	constructor(dealer){
		this.dealer = dealer
	}
}

