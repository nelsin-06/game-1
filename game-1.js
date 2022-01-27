const findResult = (M, N) => {
    const filterNumber = M.filter((number) => Number.isInteger(number));
    for (let firsIndex = 0; firsIndex < filterNumber.length; firsIndex++) {
        const element = filterNumber[firsIndex];
        for (let secondIndex = 0; secondIndex < filterNumber.length; secondIndex++) {
            const sum = element + filterNumber[secondIndex];
            if (sum === N && secondIndex !== firsIndex) {
                const result = [filterNumber[firsIndex], filterNumber[secondIndex]];
                secondIndex = filterNumber.length;
                firsIndex = filterNumber.length;
                return result;
            }
        }
    }
    return 'Not found';
};

module.exports = findResult;
