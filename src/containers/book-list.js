// 컨테이너는 리액트 컴포넌트로, 리덕스에 의해 관리되는 스테이트에 직접적인 연결이 가능
import React, { Component } from 'react';
// 'react-reudx'는 리액트와 리덕스를 연결 할수있게 하는 접착제 역할
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList

  // 아래가 리덕스와 컨테이너의 컴포넌트와 연결하는 방식
  return {
    books: state.books
  };
}

// connect는 함수를 가지며, 컴포넌트(컨테이너)를 포함
// 컨테이너는 리덕스에 속한 스테이트를 다룰 수 있는 컴포넌트
export default connect(mapStateToProps)(BookList);
