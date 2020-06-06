import chroma from 'chroma-js';
let levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRange = (hexColor) => {
    const endColor = "#fff";

    return [
        chroma(hexColor).darken(1.6).hex(), hexColor, endColor
    ]
};

const scaleGenerator = (hexColor, numberOfColors) => {
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors)
};

export const paletteGenerator = (starterPallet) => {
    let newPalette = {
        paletteName: starterPallet.paletteName,
        id: starterPallet.id,
        emoji: starterPallet.emoji,
        colors: {}
    }
    levels.forEach(level => {
        newPalette.colors[level] = []
    })
    starterPallet.colors.forEach(color => {
        let scale = scaleGenerator(color.color, 10).reverse();
        // console.log(scale)
        scale.forEach((item, index) => {
            // console.log(item)

            newPalette.colors[levels[index]].push({
                name: `${color.name} ${levels[index]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: item,
                rgb: chroma(item).css(),
                rgba: chroma(item).css().replace('rgb', 'rgba').replace(')', ',1.0)')
            })
        })
    })
    return newPalette
}