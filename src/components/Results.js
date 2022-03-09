const {Component} = wp.element;
import {Thumbnail} from "./Thumbnail";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export class Results extends Component {
    render() {
        if (this.props.search !== '' && this.props.results.length > 0) {
            return (
                <ul className='air-searchy-results'>
                    {this.props.results.map(result => (
                        <li key={result.id}>
                            <a href={result.url} className='air-searchy-result'>
                                {result.thumbnail ? (<Thumbnail thumbnail={result.thumbnail}/>) : ''}
                                <div className='air-searchy-result-text'>
                                    <span>{result.title}</span>
                                    <small>{result.typeLabel}</small>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            );
        } else if (this.props.search !== '' && !this.props.loading) {
            return (
                <ul className='air-searchy-no-results-container'>
                    <li className='air-searchy-no-results-wrapper'>
                        <span>Pas de résultat trouvé pour "{this.props.search}"</span></li>
                </ul>
            );
        }
        if (this.props.loading) {
            return (
                <ul className='air-searchy-results'>
                    <li>
                        <div className='air-searchy-result'>
                            <div className='air-searchy-result-thumbnail-skeleton air-searchy-thumbnail-container'>
                                <Skeleton/>
                            </div>
                            <div className='air-searchy-result-text air-searchy-result-text-skeleton'>
                                <span><Skeleton/></span>
                                <small><Skeleton/></small>
                            </div>
                        </div>
                    </li>
                </ul>
            )
        } else return ('');

    }
}
