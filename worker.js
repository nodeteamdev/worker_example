const { Worker } = require('worker_threads');

function runService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./pdf.js', { workerData });

        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}

async function run() {
    try {
        await runService('world');
    } catch(error) {
        console.error('runService error', error);
    }
}

module.exports = {
    start() {
        run().catch(err => console.error(err));
    }
};