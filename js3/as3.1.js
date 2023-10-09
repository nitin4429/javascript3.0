const car={
    make: "verna",
    model:"verna2.0",
    year:"2023"
}
for(const cars in car){
    console.log(`${cars}:${car[cars]}`);
}
