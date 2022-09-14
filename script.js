const root = document.querySelector(":root");

let rgbr = 233;
let chromaRgbLeft = [233, 74, 74];
let chromaRgbRight = [202, 51, 178];
let chromaProcess = 1;
const chromaCycle = () => {
    if (chromaProcess == 1) {
        //add to green until 233
        if (chromaRgbLeft[1] < 233) {
            chromaRgbLeft[1] += 2;
        } else {
            chromaProcess = 2;
        }
    } else if (chromaProcess == 2) {
        //minus from red until 74
        if (chromaRgbLeft[0] > 74) {
            chromaRgbLeft[0] -= 2;
        } else {
            chromaProcess = 3;
        }
    } else if (chromaProcess == 3) {
        //add to blue until 233
        if (chromaRgbLeft[2] < 233) {
            chromaRgbLeft[2] += 2;
        } else {
            chromaProcess = 4;
        }
    } else if (chromaProcess == 4) {
        //minus from green until 74
        if (chromaRgbLeft[1] > 74) {
            chromaRgbLeft[1] -= 2;
        } else {
            chromaProcess = 5;
        }
    } else if (chromaProcess == 5) {
        //add to red until 233
        if (chromaRgbLeft[0] < 233) {
            chromaRgbLeft[0] += 2;
        } else {
            chromaProcess = 6;
        }
    } else if (chromaProcess == 6) {
        //minus from blue until 74
        if (chromaRgbLeft[2] > 74) {
            chromaRgbLeft[2] -= 2;
        } else {
            chromaProcess = 1;
        }
    }

    let _chromaRgbLeft0 = chromaRgbLeft[0];
    let _chromaRgbLeft1 = chromaRgbLeft[1];
    let _chromaRgbLeft2 = chromaRgbLeft[2];
    root.style.setProperty(
        "--chroma-color-left",
        `rgb(${_chromaRgbLeft0}, ${_chromaRgbLeft1}, ${_chromaRgbLeft2})`
    );
    // root.style.setProperty(
    //     "--chroma-color-left",
    //     `rgb(${chromaRgbLeft[0]}, ${chromaRgbLeft[1]}, ${chromaRgbLeft[2]})`
    // );
    // root.style.setProperty(
    //     "--chroma-color-right",
    //     `rgb(${chromaRgbRight[0]}, ${chromaRgbRight[1]}, ${chromaRgbRight[2]})`
    // );
    console.log(`${chromaRgbLeft[0]}, ${chromaRgbLeft[1]}, ${chromaRgbLeft[2]}`);
};

setInterval(chromaCycle, 75);