class Farm {
    constructor(name) {
      this.name = name
      this.crops = []
      this.animals = []
    }

    addCrop(crop) {
        this.crops.push(crop)
    }

    addAnimal(animal){
        this.animals.push(animal)
    }
    calculateIncome(){
        const valueOfCrops = this.crops
        .map(crop => crop.getYieldInEuros())
        .reduce((a,b) => a + b, 0)
        const valueOfAnimals = this.animals
        .map(animal => animal.getValueInEuros())
        .reduce((a,b) => a + b, 0)

        return valueOfCrops + valueOfAnimals
    }
  
    printReport() {
        console.log(`
     ----------------------
     - Farm: Joao's Farm    -
     - No. of crops: ${this.crops.length}   -
     - No. of animals: ${this.animals.length} -
     - Total income: ${this.calculateIncome()}€ -
     ----------------------
        `)
      }
  }

 
  
  module.exports.Farm = Farm