document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btn-mas-info');
    if (btn) {
        btn.addEventListener('click', function() {
            window.location.href = '/html/servicios.html';
        });
    }
});