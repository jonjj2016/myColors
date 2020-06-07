import seedColors from '../seedColors'

export const findPalette = (id) => {
    seedColors.find(palette => {
        return palette.id === id
    })
}