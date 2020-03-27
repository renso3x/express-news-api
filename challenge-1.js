const people = [
  {
    name: 'Arisa',
    department: 'BP',
    gender: 'F'
  },
  {
    name: 'Ham',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Alice',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Anna',
    department: 'DA',
    gender: 'F'
  },
  {
    name: 'Larry',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Ria',
    department: 'Sales',
    gender: 'F'
  },
  {
    name: 'JD',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Thor',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Karl',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Rachel',
    department: 'Sales',
    gender: 'F'
  }
];

function listByGender(gender) {
  return people.filter(person => person.gender === gender.toUpperCase() && person)
    .map(person => person.name);
}

function groupByDepartment() {
  return people.reduce(function (obj, person) {
    if (!obj.hasOwnProperty(person.department)) {
      obj[person.department] = [];
    }

    obj[person.department].push(person);

    return obj;
  }, {});
}

// Test:
console.log(listByGender('M')); // Output: Includes Larry, JD, Thor, and Karl
console.log(listByGender('F')); // Output: Includes Arisa, Ham, Alice, Anna, Ria, and Rachel
console.log(groupByDepartment()); // Output: People grouped by their department