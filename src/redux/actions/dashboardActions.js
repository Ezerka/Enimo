export const COLOR_TO_DARK = 'COLOR_TO_DARK';
export const COLOR_TO_LIGHT = 'COLOR_TO_LIGHT';

export function modifyColorToDark() {
    return {
        type: COLOR_TO_DARK,
    };
}

export function modifyColorToLight() {
    return {
        type: COLOR_TO_LIGHT,
    };
}
