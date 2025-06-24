// estilos con .module .css solo funciona ne este bloque
import style from './styles/pizza-style.module.css'
export default function Pizza(){
  const soldOut =true;
return(
  // usando operador ternario para tener una clase condicional
  <li className={`${style.pizza} ${soldOut ? style["sold-out"] : ""}`}>
    <img src="pizzas/focaccia.jpg" alt="pan focaccia" />
    <div>
      <h3>Focaccia</h3>
      <p>Ingredients: Bread with italian olive oil and rosemary</p>
      <p>$130</p>
    </div>
  </li>
)
}