class Key {
    private signature: number = Math.floor(Math.random() * 100) + 1;

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}
    
    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    public door: boolean = false;
    public tenants: Person[] = [];
    
    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
        console.log('tenants =>', this.tenants);
    }
    
    public abstract openDoor(homeKey: Key): void;
    public abstract closeDoor(): void;
}

class MyHouse extends House {
    constructor(private houseKey: Key) {
        super();
    }

    public openDoor(homeKey: Key): void {
        if (homeKey.getSignature() === this.houseKey.getSignature()) {
            this.door = true;
            console.log('Welcome home');
        } else {
            console.log('Sorry. Look for your key');
        }
    }

    public closeDoor(): void {
        this.door = false;
        console.log('Door is closed again');
    }
}

// Plot 1
console.log('----------- Plot 1 ------------');
const key = new Key();
console.log('key =>', key);

const person = new Person(key); 
console.log('person =>', person);
console.log('personKey =>', person.getKey());

const house = new MyHouse(key);
console.log('house =>', house);

house.openDoor(person.getKey());
house.comeIn(person);
house.closeDoor();

// Plot 2
console.log('----------- Plot 2 ------------');
const key2 = new Key();
console.log('key 2 =>', key2);

const person2 = new Person(key2); 
console.log('person2 =>', person2);
console.log('personKey2 =>', person2.getKey());

const house2 = new MyHouse(key2);
console.log('house2 =>', house2);

house2.openDoor(person2.getKey());
house2.comeIn(person2);
house2.closeDoor();

// Plot 3
console.log('----------- Plot 3 ------------');
const key3 = new Key();
console.log('key 3 =>', key3);

const person3 = new Person(key3); 
console.log('person3 =>', person3);
console.log('personKey3 =>', person3.getKey());

const house3 = new MyHouse(key3);
console.log('house3 =>', house3);

house3.openDoor(key3);
house3.comeIn(person3);
house3.closeDoor();

export {};
