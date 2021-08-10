function init() {
    
    // document객체의 메서드(method) querySelector를 호출. 메서드는 함수임
    //javascript에서 쓸 수 있는 객체로 만듦.
    const siteTitle = document.querySelector('.site-title');
    //이런식으로 객체를 가져와서 조작할 수있다.
    siteTitle.style.background = 'red';
    
    
    console.log(siteTitle);
}

window.addEventListener('load', init);