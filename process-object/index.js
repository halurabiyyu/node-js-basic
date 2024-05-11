// TODO 1 heapUsed from memoryUsage()
const initialMemoryUsage = process.memoryUsage().heapUsed

// TODO 2 process.argv
const yourName = process.argv[2];

// TODO 3 process.env
const environment = process.env.NODE_ENV
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
// TODO 4 heapUsed from memoryUsage()
const currentMemoryUsage = process.memoryUsage().heapUsed 
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);