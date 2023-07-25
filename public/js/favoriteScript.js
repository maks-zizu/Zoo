const AnList = document.querySelector('.animalList');
const Favorites = document.querySelector('.favorites');

if (AnList) {
  AnList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('favBut')) {
      const id = e.target.dataset.id;
      const res = await fetch('/api/favorites', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          animId: id,
        }),
      });
      const data = await res.json();
    }
  });
}

if (Favorites) {
  Favorites.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delFavBut')) {
      const oneCard = e.target.closest('.animalOne');
      const res = await fetch(`/api/favorites/${e.target.dataset.id}/delete`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.delFavorite) {
        oneCard.remove();
      }
    }
  });
}
