const faker = require('faker');

const years = Array.from(Array(300).keys());

// get a random number between min and max, max exclusive
const getRandomNum = (min, max) => Math.random() * (max - min) + min;

module.exports = () => {
	const data = {companies: []};
	for (let i = 0; i < 100; i++) {
		data.companies.push({
			id: i,
			title: faker.company.companyName(),
			description: faker.company.catchPhrase(),
			timestamp: faker.date.past(years[Math.floor(getRandomNum(0, 301)) - 1]),
		});
	}
	return data;
};
