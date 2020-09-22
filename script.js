const getPercentRaise = (years, performance) => raiseInSalary = (years / 10) * performance;

const getIncreasedSalary = (age, years, performance, salary) => {
    let increasedSalary = ((getPercentRaise(years, performance) / 100) * salary) + salary;
    if (age > 50) {
        return increasedSalary += 200;
    } else if (age > 30) {
        return increasedSalary += 100;
    } else {
        return increasedSalary;
    }
}

const employee = {
    "alfred": {
        age: 47,
        years: 20,
        performance: 7,
        salary: 10000,
        newSalary: getIncreasedSalary(47, 20, 7, 10000)
    },

    "john": {
        age: 55,
        years: 26,
        performance: 10,
        salary: 14000,
        newSalary: getIncreasedSalary(55, 26, 10, 14000)
    },

    "joshua": {
        age: 60,
        years: 35,
        performance: 9,
        salary: 20000,
        newSalary: getIncreasedSalary(60, 35, 9, 20000)
    },

    "daniel": {
        age: 30,
        years: 5,
        performance: 7,
        salary: 10500,
        newSalary: getIncreasedSalary(30, 5, 7, 10500)
    },

    "jamie": {
        age: 40,
        years: 14,
        performance: 6,
        salary: 13000,
        newSalary: getIncreasedSalary(40, 14, 6, 13000)
    }
}

console.log([
    { "alfred": employee.alfred.newSalary },
    { "john": employee.john.newSalary },
    { "joshua": employee.joshua.newSalary },
    { "daniel": employee.daniel.newSalary },
    { "jamie": employee.jamie.newSalary }
]);

//console.log(Object.values(employee.joshua))

