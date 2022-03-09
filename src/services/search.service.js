import searchRepository from "../repositories/search.repository";
import resultsFactory from "../factories/results.factory";

const searchService = {
    async getSearchResultsBySearch(search) {
        const RawSearchData = await searchRepository.getSearchResultsBySearch(search);
        const SearchResults = resultsFactory.RawSearchDataToSearchResults(RawSearchData);
        return SearchResults;
    }
}

export default searchService;