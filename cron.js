const CronJob = require('cron').CronJob;
const worker = require('./worker');

const job = new CronJob('*/20 * * * * *', function() {

    worker.start();

    // for test async work
    /* const min = 2;
    const max = 1e7;
    const primes = [];
    function generatePrimes(start, range) {
        let isPrime = true;
        let end = start + range;
        for (let i = start; i < end; i++) {
            for (let j = min; j < Math.sqrt(end); j++) {
                if (i !== j && i%j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(i);
                console.log(primes.length);
            }
            isPrime = true;
        }
    }
    generatePrimes(min, max); */

}, null, true);

module.exports = {
    start() {
        job.start();
    }
};