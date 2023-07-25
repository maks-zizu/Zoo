const React = require('react');

module.exports = function Animal({ animal, userLogin, favorite }) {
  return (
    <div className="col s4 animalOne " data-id={animal.id}>
      <div className="card animal grey darken-1">
        <div className="card-name">
          <span className="card-title">{animal.name}</span>
        </div>
        <div className="card-image">
          <img className="imgAnimal" src={animal.url} />
        </div>
        <div className="card-content">
          <span className="card-title">Стоимость: {animal.price}</span>
        </div>
        <div className="card-content">
          <span className="card-title">Описание: {animal.description}</span>
        </div>
        <div className="button_box">
          {
            userLogin && <><button className='deleteAnimal btn_inner'>delete</button>
            <a href={`/animals/updForm/${animal.id}`}><button className='updAnimal btn_inner'>upd</button></a>
            </>
          }
          {/* <button className="deleteAnimal btn_inner">Удалить</button>
          <a href={`/api/animals/updForm/${animal.id}`}>
            <button className="updAnimal btn_inner">Изменить</button>
          </a> */}
        </div>
        <div className="card-action black">
          <a href={`/animal/${animal.id}`}>Узнать подробнее</a>

          {userLogin && !favorite &&(
            <button className="favBut" data-id={animal.id}> 
            Добавить в избранное
            </button>
          )}

          {userLogin && favorite && (
            <button className="delFavBut" data-id={favorite.id}>
              Удалить из избранного
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
