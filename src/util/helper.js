

export const replace = (str = '') => {
    str = str.replaceAll(' ', '-')
    str = str.replaceAll('<', '-')
    str = str.replaceAll('>', '-')
    str = str.replaceAll('{', '-')
    str = str.replaceAll('}', '-')
    str = str.replaceAll('[', '-')
    str = str.replaceAll(']', '-')
    str = str.replaceAll('^', '-')
    str = str.replaceAll('%', '-')
    str = str.replaceAll('$', '-')
    str = str.replaceAll('#', '-')
    str = str.replaceAll('@', '-')
    str = str.replaceAll('!', '')
    str = str.replaceAll("''", '')
    str = str.replaceAll("'", '')

    return str.toLocaleLowerCase()
}