// handle ampbeguity 
// core objects
// object relations
// actions

// employee, call, callcenter, monitor
// employee( respondent, manager, director)
// caller, call, 
// callCenter( 1 director, many empolyees, many calls,  )
// callcenter has many employees ( respondent, manager) , 1 director
// employee 1 to 1 with call

// call( status, resolve(), handler, timeStarted)

// employee(  isFree: boolean ,Call: Call, resolveCall(), elivateCall() )
// callCenter ( 2 callQueus, dispatchCall(), addCalltoQueue(whichqueue),2 employeeQueue  )


enum employeeType{
    respondent,
    manager,
    director

}
class Employee{
    isFree: boolean;
    rank: employeeType;
    call: Call = null;

    constructor(){
        this.isFree = true
    }
    handleCall(call: Call){
        this.call = call
        this.isFree = false
    }
    resolveCall(){
        this.call = null
        this.isFree = true
    }
    
}
//handles event like recieving call and if the caller has ended the call 
class Monitor{
    static elivateCall(emp, call){

    }
}
class lowerEmp extends Employee{
    elivateCall(){
        Monitor.elivateCall(this, this.call)
        this.call = null
    }
}

class Respondent extends lowerEmp{
    rank = employeeType.respondent
}
class Manager extends lowerEmp{
    rank = employeeType.manager
}
class Director extends Employee{
    rank = employeeType.director
}

class Call{
    startTime: number;
    handler: Employee;
    status: 'on' | 'ended';
    constructor(){
        this.startTime = new Date().getDate()
    }
    end(){

    }   
}

class ControlCenter{
    director: Director;
    respondentQueue : Queue<Respondent>
    managerQueue: Queue<Manager> = new Queue<Manager>();
    callQueueResp: Queue<Call> = new Queue<Call>();
    callQueueManager: Queue<Call>
    constructor(d: Director){
        this.director = d
    }
    addManager(man){
        this.managerQueue.enqueue(man)
    }
    addRespondent(resp){
        this.respondentQueue.enqueue(resp)
    }
    addCall(call ){
        this.callQueueResp.enqueue(call)
    }
    dispatchCall(){
        if(!this.respondentQueue.isEmpty() && !this.respondentQueue.isEmpty()){
            let employee = this.respondentQueue.dequeue().value
            let call  = this.callQueueResp.dequeue().value
            employee.handleCall(call)
            call.handler = employee
        }
    }
}

class QNode<T>{
    value: T;
    next: QNode<T>
    constructor(v: T){
        this.value = v
        this.next = null
    }
}
class Queue<T>{
    head: QNode<T>
    tail: QNode<T>
    constructor(){
        this.head = null
        this.tail = null
    }
    

    enqueue(t: T){
        let newnode = new QNode<T>(t)
        if (this.head === null) this.head = newnode
        if (this.tail != null) this.tail.next = newnode
        this.tail = newnode
    }

    dequeue(){
        if(this.head == null) return
        let node = this.head
        this.head = this.head.next
        if( this.head === null) this.tail = null
        return node
    }   

    isEmpty(){
        return this.head === null
    }
}