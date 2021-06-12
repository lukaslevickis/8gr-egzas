/* 
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau. 
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10

*/
let recursionCount = 0;

countKavines(data);
countKaunoKavines(data);
countPirmosKavinesPatiekalai(data);
countPatiekalaiKaune(data);
countViduteKaina(data);
countKurAukstesneVidKaina(data);
countVegPatiekalai(data);
countKurArVilniujeDaugiauVeg(data);
recurse();

function countKavines(data) {
    console.log("kaviniu kiekis - " + data.length);
}

function countKaunoKavines(data) {
    let count = 0;
    for (const [key, value] of Object.entries(data)) {
        if (value.adresas.toLowerCase().includes("kaunas")) {
            count++;
        }
    }

    console.log("kaviniu kiekis Kaune - " + count);
}

function countPirmosKavinesPatiekalai(data) {
    console.log("pirmos kavines patiekalu kiekis - " + data[0].menu.length);
}

function countPatiekalaiKaune() {
    const arr = []
    for (const [key, value] of Object.entries(data)) {
        if (value.adresas.toLowerCase().includes("kaunas")) {
            for (const [key, menu] of Object.entries(value.menu)) {
                arr.push(Object.keys(menu)[0].toString());
            }
        }
    }

    let x = (arr) => arr.filter((v,i) => arr.indexOf(v) === i);
    console.log("patiekalu kiekis Kaune - " + x(arr).length);
}

function countViduteKaina(data) {
    let count = 0;
    let sum = 0;
    for (const [key, value] of Object.entries(data)) {
        for (const [key, menu] of Object.entries(value.menu)) {
            count++;
            sum += menu[Object.keys(menu)[0]];
        }
    }

    let vidutineKaina = sum / count;

    console.log("vidutine kaina tinkle - " + (Math.round(vidutineKaina * 100) / 100).toFixed(2));
}

function countKurAukstesneVidKaina(data) {
    let count = 0;
    let sum = 0;
    let countKaunas = 0;
    let sumKaunas = 0;
    for (const [key, value] of Object.entries(data)) {
        if (value.adresas.toLowerCase().includes("kaunas")) {
            for (const [key, menu] of Object.entries(value.menu)) {
                countKaunas++;
                sumKaunas += menu[Object.keys(menu)[0]];
            }
        }
    }

    let vidutineKainaKaune = sumKaunas / countKaunas;

    for (const [key, value] of Object.entries(data)) {
        if (!value.adresas.toLowerCase().includes("kaunas")) {
            for (const [key, menu] of Object.entries(value.menu)) {
                count++;
                sum += menu[Object.keys(menu)[0]];
            }
        }
    }

    let vidutineKainaKitur = sum / count;

    if (vidutineKainaKaune > vidutineKainaKitur) {
        console.log("Ar vidutine kaina aukstesne Kaune? - Taip");
    } else {
        console.log("Ar vidutine kaina aukstesne Kaune? - Ne");
    }
}

function countVegPatiekalai(data) {
    let count = 0;
    let veg = 0;
    for (const [key, value] of Object.entries(data)) {
        for (const [key, menu] of Object.entries(value.menu)) {
            count++;
            if (menu[Object.keys(menu)[1]] == "taip") {
                veg++;
            }
        }
    }

    let result = (veg * 100) / count;
    console.log("vegetariski patiekalai tinkle sudaro - " + (Math.round(result * 100) / 100).toFixed(2) + "%");
}

function countKurArVilniujeDaugiauVeg(data) {
    let count = 0;
    let veg = 0;
    let countVilnius = 0;
    let vegVilnius = 0;
    for (const [key, value] of Object.entries(data)) {
        if (value.adresas.toLowerCase().includes("vilnius")) {
            for (const [key, menu] of Object.entries(value.menu)) {
                countVilnius++;
                if (menu[Object.keys(menu)[1]] == "taip") {
                    vegVilnius++;
                }
            }
        }
    }

    let resultVilnius = (vegVilnius * 100) / countVilnius;

    for (const [key, value] of Object.entries(data)) {
        if (!value.adresas.toLowerCase().includes("vilnius")) {
            for (const [key, menu] of Object.entries(value.menu)) {
                count++;
                if (menu[Object.keys(menu)[1]] == "taip") {
                    veg++;
                }
            }
        }
    }

    let resultOther = (veg * 100) / count;

    if (resultVilnius >= resultOther) {
        console.log("Po vienodai");
    } else if (resultVilnius > resultOther) {
        console.log("Vilniuje daugiau vegetarisku patiekalu");
    } else {
        console.log("Vilniuje maziau vegetarisku patiekalu");
    }
}

function recurse() {
    recursionCount++;
    console.log(recursionCount);
    if (recursionCount == 10) {
        return;
    }

    recurse();
}

