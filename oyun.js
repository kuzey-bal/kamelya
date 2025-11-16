document.addEventListener('DOMContentLoaded', () => {
    const catImage = document.getElementById('cat-image');

    // Kediye tıklama olayı dinleyicisi
    catImage.addEventListener('click', () => {
        // Kediyi zıplatmak için CSS sınıfını ekle
        catImage.classList.add('jump');

        // Kısa bir süre sonra sınıfı kaldır ki, tekrar tıklanabilsin ve animasyon sıfırlansın
        setTimeout(() => {
            catImage.classList.remove('jump');
        }, 800);

        console.log("Miyav! Kamelya gülümsedi.");
    });
});
