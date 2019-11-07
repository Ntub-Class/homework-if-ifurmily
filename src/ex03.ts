// 語法糖
class Animal {
    constructor(public name: string) {}

    eat() {
        console.log(this.name, 'I can eat');
    }
}

class Bird extends Animal {
    constructor(name: string, public color: string) {
        super(name)
    }

    fly(){
        console.log('I can fly');
    }

    eat(){
        super.eat();
        console.log('我複寫了我老爸的');
    }

}

let bird1 = new Bird('金絲雀', 'black');

bird1.eat();