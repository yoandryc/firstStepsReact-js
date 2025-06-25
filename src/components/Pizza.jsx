// estilos con .module .css solo funciona ne este bloque
import style from './styles/pizza-style.module.css'
export default function Pizza({ pizzaObject }) {
  console.log("Props", pizzaObject);
return(
  // usando operador ternario para tener una clase condicional
  <li className={`${style.pizza} ${pizzaObject.soldOut ? style["sold-out"] : ""}`}>
    <img src={pizzaObject.photoName} alt={pizzaObject.name} />
    <div>
      <h3>{pizzaObject.name}</h3>
      <p>{pizzaObject.ingredients}</p>
      <p>{pizzaObject.price}</p>
      <button>Delete pizza 🗑️</button>
    </div>
  </li>
)
}