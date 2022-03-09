import resultFactory from "./result.factory";

const resultsFactory = {
    RawSearchDataToSearchResults(RawSearchData) {
        return RawSearchData.map((RawSearchResult) => {
            return resultFactory.RawSearchResultToSearchResult(RawSearchResult)
        });
    },
}

export default resultsFactory