import * as promiseUtils from '../src/utils/responseUtils'
import * as GLOBALS from '../src/globals'

describe("promiseUtils", () => {

    it('checkStatus with HTTP Status codes between 200 and 299 returns the response object', () => {
        let i = GLOBALS.httpStatusCodeSuccessLowerLimit;
        while (i <= GLOBALS.httpStatusCodeSuccessUpperLimit) {
            let response = {
                status: i
            };

            expect(promiseUtils.checkStatus(response)).toBe(response);
            i++;
        }
    })

    it('checkStatus with HTTP Status codes between 100 and 199 throws exception', () => {
        let i = 100;
        while (i <= 199) {
            let response = {
                status: i,
                statusText: "abc"
            };

            expect(() =>{promiseUtils.checkStatus(response)}).toThrowError("abc");
            i++;
        }
    });

    it('checkStatus with HTTP Status codes between 300 and 530 throws exception', () => {
        let i = 300;
        while (i <= 530) {
            let response = {
                status: i,
                statusText: "abc"
            };

            expect(() =>{promiseUtils.checkStatus(response)}).toThrowError("abc");
            i++;
        }
    });

});