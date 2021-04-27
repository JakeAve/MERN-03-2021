function tossCoin() {
    return Math.random() > 0.5 ? 'heads' : 'tails';
}

function fiveHeadsSync() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5 && attempts < 100) {
            attempts++;
            const result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === 'heads') {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (attempts >= 100) {
                reject(`It took more than 100 tries to get that`);
            }
        }
        resolve(`It took ${attempts} tries to flip five "heads"`);
    });
}

// fiveHeadsSync()
//     .then((val) => console.log(val))
//     .catch((err) => console.error(err))
//     .finally(() => console.log('finally'))

// setTimeout(() => console.log('Menos importante'));

// console.log('This is run after the fiveHeadsSync function completes');
// console.log('Información importante');

(async () => {
    try {
        console.log('Información importante');
        const resultado = await fiveHeadsSync();
        console.log(resultado);
        console.log('This is run after the fiveHeadsSync function completes');
    } catch (e) {
        // Deal with the fact the chain failed
        console.log('Catching');
        console.log(e);
    }
    console.log('sigue sin problema');
})();
