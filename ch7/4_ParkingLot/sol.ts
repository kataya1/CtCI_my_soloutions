// does it handicaped places 
// is it a free or paid parking lot
// if it's paid is it pay at entry or pay when you leave by hour parked
// parckinglot, space, cars 

// parkinglot has many spaces
// a space can have one car 

// a space can only accomediate some type of cars 

// parkinglot( space[], handicapedSpace[], isFull(cartype), park(), releaseCar(), calculatePay())
// car ( type, pay)
// space( carTypesAllowed, isOccupied, timeSinceOccupation, park())



type carType  = SpaceType
class Car{
    type: carType
    space: Space

}

enum SpaceType{
    normal = 0,
    handicaped,
    big,
    large
}
class Space{
    type: SpaceType
    isOccupied: boolean 
    startTimeOfOccupation: number
    hourlyRate: number
    constructor(t: SpaceType, hrR: number){
        this.type = t
        
        this.hourlyRate = hrR
    }

    park(car: Car){
        
        this.isOccupied = true
        this.startTimeOfOccupation = new Date().getDate()
    }
    release(){
        this.isOccupied = false
        this.startTimeOfOccupation = 0
    }
}

class ParkingLot{
    spaces: Space[][]
    occupiedSpaces: Set<Space>
    constructor(ss: Space[]){
        ss.forEach(s => this.spaces[s.type].push(s))
    }
    isThereAvailableSpace(carType){
        return (this.spaces[carType].length)  
    }
    park(car: Car){
        if(!this.isThereAvailableSpace(car.type))  return false
        let s = this.spaces[car.type].pop()
        s.park(car)
        this.occupiedSpaces.add(s)
        return true
    }
    releaseCar(car: Car){
        let s = car.space
        let bill = this.calculatePay(s)
        this.occupiedSpaces.delete(s)
        s.release()
        this.spaces[s.type].push(s)
    }
    calculatePay(space){
        let now =( new Date()).getDate()
        let timeElapsedInHours = (now - space.startTimeOfOccupation )/ (1000 *60 * 60)
        return timeElapsedInHours * space.hourlyRate
    }

}
