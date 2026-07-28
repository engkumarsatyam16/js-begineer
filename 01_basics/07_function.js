function updateBrand(obj){

    obj.brand = "TOYOTA";

    obj=null;

}

const car ={

      brand: 'Honda',
      model: 'Accord',
      year:  '1976'

};

console.log(car.brand);

updateBrand(car);

console.log(car.brand);