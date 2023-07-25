const addForm = document.querySelector('.addForm');
const animalList = document.querySelector('.animalList');
const updForm = document.querySelector('.updForm');

if (updForm) {
  updForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, url, description, price,
    } = e.target;
    const { id } = e.target.dataset;
    // const  id  = e.target.dataset.id;
    const res = await fetch(`/api/animals/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        url: url.value,
        price: price.value,
        description: description.value,
      }),
    });
    const data = await res.json();
    if (data.animalUpd[0] > 0) {
      window.location.href = '/';
    }
  });
}

if (animalList) {
  animalList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('deleteAnimal')) {
      const animalOne = e.target.closest('.animalOne');
      const res = await fetch(`/api/animals/${animalOne.dataset.id}/delete`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.delAnimal) {
        animalOne.remove();
      }
    }
  });
}

if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, url, description, price, action, method,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        url: url.value,
        description: description.value,
        price: price.value,
      }),
    });
    const data = await res.json();
    if (data.html) {
      animalList.insertAdjacentHTML('beforeend', data.html);
    }
    if (data.message) {
      document.querySelector('.errorAdd').innerHTML = data.message;
    }
  });
}
