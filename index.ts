import * as fs from "node:fs"

fs.writeFile('file.txt', 'Hello from file.txt!', 'utf-8', (err) => {
    if (err) {
        console.log(err)
        return;
    }
    fs.readFile('file.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(data)
    })
})
