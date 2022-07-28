import mage from "./character"

class Team {
    constructor() {
        this.members = new Set()
    }

    add(obj){
        if(this.members.has(obj)) {
            return error
        }
        this.members.add(obj)
        
    }

    addAll(arr){
        arr.forEach((el)=> {
            this.members.add(el)
        })

    }

    toArray() {
        this.members

    }

}