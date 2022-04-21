export function Check() {
    const search = document.getElementById('search');
    search.classList.add('check');
    setTimeout(function() {
    search.classList.remove('check');
    }, 3000);
}