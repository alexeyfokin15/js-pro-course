function filter() {
    return Array.from(new Set(arguments))
}
filter(1, 2, 7, 7, 7, 4, 7, 4, 2, 5, 6, 7, 7)