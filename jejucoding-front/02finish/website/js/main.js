window.addEventListener('load', () => {
    const btn = document.querySelector('.global-menu-btn');


    function btnClickHandler() {
        //add : 추가
        //remove : 삭제
        //toggle : 뺏다 넣다
        //contains : 포함여부

        document.body.classList.toggle('menu-on');
        console.log('alert!');
    }
    // 이벤트가 발생했을때 실행되는 함수를 이벤트 리스너라고 한다
    btn.addEventListener('click', btnClickHandler);

} );