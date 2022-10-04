/**
 * Реализовать функцию membersOnActiveMeetups в этом файле, и экспортировать ее.
 *
 * Функция принимает массив meetups,
 * и возвращает суммарное количество человек, находящихся на активных митапах
 *
 * Пример вызова с нижним набором данных
 * membersOnActiveMeetups(meetups); // 1500
 */

// Раскомментировать нижнее, при начале реализации

export function membersOnActiveMeetups(meetups) {
    let peopleCount = 0
    for (let key of meetups) {
        if (key.isActive === true) {
            peopleCount += key.members;
        }
    }
    return peopleCount;
}