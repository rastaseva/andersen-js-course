﻿﻿﻿
/**
 * Написать функцию, которая принимает массив, внутри которого могут быть примитивы, но могут быть и другой массив. Возвратиться должен массив, в котором вместо внутренних массивов будет их содержимое.
 *
 * Пример вызова
 * console.log(task13Old([1, 2, 3, [4, 5]])); -> [1, 2, 3, 4, 5]
 */

export function task13Old(arr) {
    return arr.reduce((acc, item) => acc.concat(item), []);
}

// Напишите реализацию функции task13Old на ESnext ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export const task13New = (arr) => arr.flat()