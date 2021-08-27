const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll(".colAnim").forEach(e => e.classList.add('colFinal'));
        } else {
            entry.target.querySelectorAll(".colAnim").forEach(e => e.classList.remove('colFinal'));
        }
    });
});
document.querySelectorAll('.containerAnim').forEach(entry => {
    // entry.classList.remove('colFinal');
    observer.observe(entry)
})
