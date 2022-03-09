const resultsFactory = {
    RawSearchResultToSearchResult(RawSearchResult) {
        return {
            id: RawSearchResult.id,
            url: RawSearchResult.url,
            thumbnail: RawSearchResult.thumbnail,
            title: RawSearchResult.title,
            type: RawSearchResult.type,
            typeLabel: RawSearchResult.type_label,
        }
    },
}

export default resultsFactory