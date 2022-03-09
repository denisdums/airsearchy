import searchService from "../services/search.service";

const {Component} = wp.element;
import {Results} from "./Results";

export class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {results: [], search: '', loading: false};
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className='air-searchy-wrapper'>
                <input placeholder='Recherche...'
                       type='search'
                       className='air-searchy-input'
                       onChange={this.handleChange}/>
                <Results results={this.state.results} search={this.state.search} loading={this.state.loading}/>
            </div>
        );
    }

    handleChange({target}) {
        if (target.value === '') {
            this.setState({search: target.value})
            this.setState({results: []})
            this.setState({loading: false});
            return;
        }

        let tempSearch = target.value;
        this.setState({search: target.value});
        this.setState({loading: true});

        setTimeout(async () => {
            if (tempSearch !== this.state.search) {
                return;
            }
            const results = await searchService.getSearchResultsBySearch(this.state.search);
            this.setState({results: results})
        }, 500)
    }
}
