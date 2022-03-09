import {Searchbar} from "./components/Searchbar";
import "./assets/style/app.css";

const {render} = wp.element;
const root = document.getElementById('air-searchy');

render(
    <Searchbar/>,
    root
);
