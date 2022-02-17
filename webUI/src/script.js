import Controller from "./controllers/Controller.js";
import Model from "./models/Model.js";
import View from "./views/View.js";

const app = new Controller(new Model(), new View());