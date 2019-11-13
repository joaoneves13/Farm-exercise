// index.spec.js
const {Farm} = require('./index')
const {Wheat, Sugarcane} = require('./crops')
const {Cow, Horse} = require('./animals')

test('Joao Farm', () => {
  const farm = new Farm("Joao's Farm")
  expect(farm.name).toBe("Joao's Farm")
})

test('We can add a crop to our farm', () => {
  const farm = new Farm("Joao's Farm")
  farm.addCrop(new Wheat(100))
})

test('The income of an empty farm is 0', () => {
  const farm = new Farm("Joao's Farm")
  expect(farm.calculateIncome()).toBe(0)
})

test('The income of a 100 Wheat + 100 Sugarcane farm is X', () => {
  const farm = new Farm("Joao's Farm")
  farm.addCrop(new Wheat(100))
  farm.addCrop(new Sugarcane(100))
  expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1)
})

test('Animals can be added to the farm', () => {
  const farm = new Farm()
  farm.addAnimal(new Cow(100))
})

test('Animals will be taken into account for calculateIncome', () => {
  const farm = new Farm()
  farm.addAnimal(new Cow(100))
  expect(farm.calculateIncome()).not.toBe(0)
})

test("The income of Joao's farm", () => {
  const farm = new Farm("Joao's Farm")
  farm.addCrop(new Wheat(50))
  farm.addCrop(new Sugarcane(400))
  farm.addAnimal(new Cow(200))
  farm.addAnimal(new Horse(10))
  expect(farm.calculateIncome())
})