// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    get circumference(){
        return 2 * Math.PI * this.radius
    }

    get area(){
        return Math.PI * this.radius * this.radius;
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI);
    }

    set circumference(newC){
        this.radius = newC / 2 / Math.PI;
    }

    set diameter(newD){
        this.radius = newD/2;
    }
}

