const faker = require('faker');

const clients = [];

for (let i = 0; i < 5; i++) {
  const name = faker.name.findName();
  const email = faker.internet.email();
  const image = faker.image.imageUrl();
  const genre = faker.random.word();
  const description = faker.lorem.sentence();
  
  const professional = {
    name,
    email,
    image,
    genre,
    description,
   
  };

  professionals.push(professional);
}

console.log(professionals);
