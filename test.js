import { Team, ErrorRepository } from './main'
test('add', () => {
    let team = new Team
    let arr = {
        name: 'Baraban',
        attack: 4
    }
    team.add(arr)
    let result = team.toArray()
    let expectResult = [{name: 'Baraban', attack: 4}]
    expect(result).toEqual(expectResult)

})


test('error', () => {
    let error = new ErrorRepository
    let testingCode = {number: 404, text: 'Какая-то ошибка получилась'}
    error.translate(testingCode)
    let expectResult = new Map(testingCode)
    expect(error).toEqual(expectResult)

})