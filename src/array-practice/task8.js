/**
 * Реализовать функцию without в этом файле, и экспортировать ее.
 *
 * Первый аргумент - массив, второй и последующие - значения
 *
 * Функция возвращает новый массив, который наполнен теми значениями,
 * которые не передавались как второй и последующие аргументы функции
 * ([2, 1, 2, 3], 1, 2)) -> 1ца и 2ка убрались, осталась только 3ка. Вернули [3]
 * ([2, 1, 10, 20], 1, 2)) -> 1ца и 2ка убрались, остались 10, 20. Вернули [10, 20]
 *
 * console.log(without([2, 1, 2, 3], 1, 2)) -> [3]
 * console.log(without([2, 1, 10, 20], 1, 2)) -> [10, 20]
 */


export function without(arr, ...rest) {
    const arr2 = arr.concat(rest).reduce((acc, i) => {
            if (acc.get(i)) {
                acc.set(i, 2)
            } else {
                acc.set(i, 1)
            }
            return acc
        },
        new Map())
    const res = []
    for (let key of arr2) {
        if (key[1] === 1) {
            res.push(key[0])
        }
    }
    return res
}

console.log(without([2, 1, 2, 3], 1, 2))
console.log(without([2, 1, 10, 20], 1, 2))