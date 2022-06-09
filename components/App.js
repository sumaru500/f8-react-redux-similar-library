import render from '../react/index.js';
import {connect} from '../store.js'



function App(props) {
    const {cars} = props;
    console.log(cars);
    return render`
        <input type="text" name="car" id ="car"></input>
        <button onClick="dispatch('ADD', document.querySelector('input[name=car]').value)">ADD</button>
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>
    `
}

const connector = connect(state => ({cars: state.cars})); // state to props
export default connector(App);