export const getAsNumber = (string: string | Array<string>) => {
    if (Array.isArray(string)) {
        return string[0]
    }

    return string
}