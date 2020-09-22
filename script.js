const employee = {
    "alfred": {
        age: 47,
        years: 20,
        performance: 7,
        salary: 10000
    },

    "john": {
        age: 55,
        years: 26,
        performance: 10,
        salary: 14000
    },

    "joshua": {
        age: 60,
        years: 35,
        performance: 9,
        salary: 20000
    },

    "daniel": {
        age: 30,
        years: 5,
        performance: 7,
        salary: 10500
    },

    "jamie": {
        age: 40,
        years: 14,
        performance: 6,
        salary: 13000
    },
}

const getPercentRaise = (years, performance) => {
    let raiseInSalary = (years / 10) * performance;
    return raiseInSalary;
}

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

const newData = {
    "percentRaise": {
        alfred: getPercentRaise(20, 7),
        john: getPercentRaise(26, 10),
        joshua: getPercentRaise(35, 9),
        daniel: getPercentRaise(5, 7),
        jamie: getPercentRaise(14, 6)
    },

    "salaries": {
        alfred: getIncreasedSalary(47, 20, 7, 10000),
        john: getIncreasedSalary(55, 26, 10, 14000),
        joshua: getIncreasedSalary(60, 35, 9, 20000),
        daniel: getIncreasedSalary(30, 5, 7, 10500),
        jamie: getIncreasedSalary(40, 14, 6, 13000)
    }
}

console.log(employee.salaries)

const get15PercentRaise = () => {
    const percentList = [];
    let employeeNames = Object.keys(newData.percentRaise);
    let percents = Object.values(newData.percentRaise);
    for (let i = 0; i < percents.length; i++) {
        if (percents[i] >= 15) {
            percentList.push(employeeNames[i]);
        }
    }
    return percentList;
}

console.log(get15PercentRaise())


console.log([
    { "alfred": employee.alfred.newSalary },
    { "john": employee.john.newSalary },
    { "joshua": employee.joshua.newSalary },
    { "daniel": employee.daniel.newSalary },
    { "jamie": employee.jamie.newSalary }
]);

/*
var person = Object.keys(employee)[0];
var personSalary = Object.values(employee.alfred)[4];
var obj = {
    salaries: [
        { person: personSalary },
        { person: personSalary }
    ]
}

console.log(obj) */

