const regForm = document.querySelector('.regForm');
const regError = document.querySelector('.regError');
const logForm = document.querySelector('.logForm');
const logError = document.querySelector('.logError');
const logout = document.querySelector('.logout');

if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { login, password, passwordCheck, method, action } = e.target;
    if (password.value === passwordCheck.value) {
      const res = await fetch(action, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: login.value,
          password: password.value,
        }),
      });
      const data = await res.json();
      if (data.message === 'ok') {
        window.location.href = '/';
      }
    } else {
      regError.innerText = 'Пароли не совпадают, повторите попытку';
    }
  });
}

if (logForm) {
  logForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { login, password, action, method } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.href = '/';
    } else {
      logError.innerHTML = 'введены неверные данные';
    }
  });
}

if (logout) {
  logout.addEventListener('click', async () => {
    const res = await fetch('/auth/logout');
    const data = await res.json();
    if (data.message === 'Успешный выход') {
      window.location.href = '/';
    }
  });
}
