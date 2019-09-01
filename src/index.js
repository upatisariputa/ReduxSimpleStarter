import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCVTEb4wTymHysswnR8JsbI_qjm0iyMAUo';

// 새로운 컴포넌트 작성, 이 컴포넌트는 HTML을 생성
class App extends Component {
  // 앱 시작시 constructor 실행
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: []
    };

    this.videoSearch('트와이스');
    // 그러면 consturctor 안에 있는 YTSearch가 바로 실행 됨
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
      // this.setState({videos : videos}) 위는 ES6에서 키와 값이 같을 때 사용 가능
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// 이 컴포넌트가 만든 HTML을 가져가고, 페이지에 반영 (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
