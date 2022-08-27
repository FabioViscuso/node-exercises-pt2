function awaitLuckyDraw(player: string) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

async function ageResults() {
    try {
        const Tina = await awaitLuckyDraw('Tina');
        const Jorge = await awaitLuckyDraw('Jorge');
        const Julien = await awaitLuckyDraw('Julien');
        console.log(Tina, Jorge, Julien)
    } catch (err) {
        console.log(err)
    }
}
ageResults()
