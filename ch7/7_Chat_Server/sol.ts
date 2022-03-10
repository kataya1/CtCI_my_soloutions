// contacts, user(sender, reciever) , message, window, 

// sender many to many with reciever
// sender 1 to many with messages 
// message many to many with receiver 

class User{
    id: number;
    // name
    constructor(){
        // generate id 

    }
}

class Message{
    id: number;
    content: string;
    Senddate: number;
    senderID: number
    constructor(){

    }
    send(recieverID: number){
        
    }
}