const {Component} = wp.element;

export class Thumbnail extends Component {
  render() {
    return (
      <div className='air-searchy-thumbnail-container'>
        <div className='air-searchy-thumbnail-wrapper'>
          <img className='air-searchy-thumbnail-image' src={this.props.thumbnail}/>
        </div>
      </div>
    )
  }
}
