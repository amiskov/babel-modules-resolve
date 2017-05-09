module.exports = {
    init() {
        const menu = document.createElement('div');
        menu.innerHTML = 'Hello, I am menu';
        menu.style.border = '1px solid #000';
        document.body.appendChild(menu);

        menu.addEventListener('click', () => {
            this.open();
        })
    },
    open() {
        alert('Open')
    }
}
