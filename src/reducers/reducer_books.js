// 리듀서는 어플리케이션 스테이트를 반환하는 함수
// 함수이고 책 리스트의 어플리케이션 스테이트를 반환
// 이렇게 만든 리듀서는 두개의 스탭 프로세스가 있음
// 첫번째 프로세스는 리듀서를 생성
// 두번째는 앱과 연결
export default function() {
  return [
    { title: 'javascript : The Good Parts' },
    { title: 'Harray Potter' },
    { title: 'The Dark Tower' },
    { title: 'Eloquent Ruby' }
  ];
}
