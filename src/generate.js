import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

// const randomName = faker.person.fullName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const generate = num => {
  let obj = {people: []}
  for(let i=0;i<num;i++){
    obj.people.push({id:i, name:faker.person.fullName() })
  }
  return obj
}

const peopleObj = generate(100)
console.log(peopleObj)
