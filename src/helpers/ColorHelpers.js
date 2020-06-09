import chroma from 'chroma-js';
import seedColors from '../seedColors';

let levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRange = (hexColor) => {
    const endColor = '#fff';

    return [chroma(hexColor).darken(1.6).hex(), hexColor, endColor];
};

const scaleGenerator = (hexColor, numberOfColors) => {
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
};

export const paletteGenerator = (starterPallet) => {
    let newPalette = {
        paletteName: starterPallet.paletteName,
        id: starterPallet.id,
        emoji: starterPallet.emoji,
        colors: {},
    };
    levels.forEach((level) => {
        newPalette.colors[level] = [];
    });
    starterPallet.colors.forEach((color) => {
        let scale = scaleGenerator(color.color, 10).reverse();
        // console.log(scale)
        scale.forEach((item, index) => {
            // console.log(item)

            newPalette.colors[levels[index]].push({
                name: `${color.name} ${levels[index]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: item,
                rgb: chroma(item).css(),
                rgba: chroma(item).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
            });
        });
    });
    return newPalette;
};

export const findPalette = (id) => {
    return seedColors.find((palette) => {
        return palette.id === id;
    });
};
export const gatherShades = (color, palette) => {
    //gathering all shades
    let shades = [];

    const allCollors = palette.colors;

    const keys = Object.keys(allCollors);
    keys.forEach((key) => {
        shades = [...shades, ...allCollors[key]];
    });
    return shades.filter((shade) => shade.id === color).slice(1);
};