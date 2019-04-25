import * as searchParameterUtils from '../src/utils/searchParameterUtils'
import * as GLOBALS from '../src/globals'


describe("searchParameterUtils", () => {

    describe("getGridModeSearchParam tests", () => {

        it("With empty search parameters returns mode set to grid", () => {

            let result = searchParameterUtils.getGridModeSearchParam("");
            expect(result).toBe("?mode=grid");
        });

        it("With search parameter with mode set to grid returns search parameter untouched", () => {

            let result = searchParameterUtils.getGridModeSearchParam("?mode=grid");
            expect(result).toBe("?mode=grid");
        });

        it("With search parameter with mode set to grid and page set returns search parameter untouched", () => {

            let result = searchParameterUtils.getGridModeSearchParam("?page=1&mode=grid");
            expect(result).toBe("?page=1&mode=grid");
        });

        it("With search parameter with mode set to list returns mode set to grid", () => {

            let result = searchParameterUtils.getGridModeSearchParam("?mode=list");
            expect(result).toBe("?mode=grid");
        });

        it("With search parameter with mode set to list and page set returns mode set to grid and rest of the search untouched", () => {

            let result = searchParameterUtils.getGridModeSearchParam("?page=1&mode=list");
            expect(result).toBe("?page=1&mode=grid");
        });
    });

    describe("getListModeSearchParam tests", () => {

        it("With empty search parameters returns mode set to grid", () => {

            let result = searchParameterUtils.getListModeSearchParam("");
            expect(result).toBe("?mode=list");
        });

        it("With search parameter with mode set to list returns search parameter untouched", () => {

            let result = searchParameterUtils.getListModeSearchParam("?mode=list");
            expect(result).toBe("?mode=list");
        });

        it("With search parameter with mode set to list and page set returns search parameter untouched", () => {

            let result = searchParameterUtils.getListModeSearchParam("?page=1&mode=list");
            expect(result).toBe("?page=1&mode=list");
        });

        it("With search parameter with mode set to grid returns mode set to list", () => {

            let result = searchParameterUtils.getListModeSearchParam("?mode=grid");
            expect(result).toBe("?mode=list");
        });

        it("With search parameter with mode set to grid and page set returns mode set to list and rest of the search untouched", () => {

            let result = searchParameterUtils.getListModeSearchParam("?page=1&mode=grid");
            expect(result).toBe("?page=1&mode=list");
        });
    });

    describe("getSearchParamWithNewParameterValue tests", () => {

        it("With empty search parameter page to be set returns search param with page value", () => {

            let result = searchParameterUtils.getSearchParamWithNewParameterValue("", GLOBALS.searchParameterPage, "2");
            expect(result).toBe("?page=2");
        });

        it("With search parameter containing page and mode set and page to be set returns search param with updated page value", () => {

            let result = searchParameterUtils.getSearchParamWithNewParameterValue("page=1&mode=grid", GLOBALS.searchParameterPage, "2");
            expect(result).toBe("?page=2&mode=grid");
        });

    });

    describe("getPageParameter tests", () => {

        it("With empty search param returns first page (= 0)", () => {

            let result = searchParameterUtils.getPageParameter("");
            expect(result).toBe(0);
        });

        it("With search param page set to 0 returns 0 (= pages start from index zero)", () => {
            let result = searchParameterUtils.getPageParameter("?page=0");
            expect(result).toBe(0);
        });

        it("With search param page set to 2 returns 1 (= pages start from index zero)", () => {
            let result = searchParameterUtils.getPageParameter("?page=2");
            expect(result).toBe(1);
        });

        it("With search param page set to negative returns 0 (= pages start from index zero)", () => {
            let result = searchParameterUtils.getPageParameter("?page=-1");
            expect(result).toBe(0);
        });

        it("With search param page set to greater than 3 returns 0 (= pages start from index zero)", () => {
            let result = searchParameterUtils.getPageParameter("?page=4");
            expect(result).toBe(0);
        });

        it("With search param page set to not not integer returns 0 (= pages start from index zero)", () => {
            let result = searchParameterUtils.getPageParameter("?page=a");
            expect(result).toBe(0);
        });
    });

    describe("getModeParameter tests", () => {

        it("With empty search param returns grid", () => {
            let result = searchParameterUtils.getModeParameter("");
            expect(result).toBe("grid");
        });

        it("With search param set to something else than grid|list returns grid", () => {
            let result = searchParameterUtils.getModeParameter("?page=1&mode=unknown");
            expect(result).toBe("grid");
        });

        it("With search param set to grid returns grid", () => {
            let result = searchParameterUtils.getModeParameter("?page=1&mode=grid");
            expect(result).toBe("grid");
        });

        it("With search param set to list returns list", () => {
            let result = searchParameterUtils.getModeParameter("?page=1&mode=list");
            expect(result).toBe("list");
        });
    });

});