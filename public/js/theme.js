// This would be more suitable for the color theme change in the selection modal


let themeButtons = document.querySelectorAll('.timer-states .state')
themeButtons.forEach(function(btn){
    btn.addEventListener('click',function(){
        document.querySelector('.timer-states .state.current').classList.remove('current')
        this.classList.add('current')
        // document.querySelector('html').classList = this.getAttribute('data-theme')
    })
})