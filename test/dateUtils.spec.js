import * as dateUtils from '../src/utils/dateUtils'

describe("dateUtils", () => {

    it('dateDiff throws exception if second date is before first date', () => {
        let firstDate = new Date(2019, 2, 2);
        let secondDate = new Date(2019, 2, 1);
        expect(() => {dateUtils.dateDiff(firstDate, secondDate)}).toThrowError("Second date can't be before first date");
    });

    it('dateDiff returns integer describing the days between dates', () => {
        let firstDate = new Date(2019, 2, 1);
        let secondDate = new Date(2019, 2, 2);
        let result = dateUtils.dateDiff(firstDate, secondDate);
        expect(result).toBe(1);
    });
});