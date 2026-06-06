const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" }
];

const product = products.find(p => p.id === 2);

console.log(product);