// const record = [
//     {year: '2015', result: 'L'},
//     {year: '2014', result: 'N/A'},
//     {year: '2013', result: 'W'},
// ]

function superbowlWin(array) {
    const newObject = array.find(item => item.result === 'W')
    if (typeof newObject === 'object') {
        return newObject.year;
    }
}

// console.log(superbowlWin(record));