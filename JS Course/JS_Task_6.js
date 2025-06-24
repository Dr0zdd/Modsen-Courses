class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    annualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, bonusMultiplier) {
        super(name, salary);
        this.bonusMultiplier = bonusMultiplier;
    }

    annualSalary() {
        const base = super.annualSalary();
        return base * this.bonusMultiplier;
    }
}


const person1 = new Manager('Ilya', 500, 1.2);
console.log(`${person1.name}  получает в год: ${person1.annualSalary()}`);

const person2 = new Manager('Yulia', 2500, 1.5);
console.log(`${person2.name}  получает в год: ${person2.annualSalary()}`);
