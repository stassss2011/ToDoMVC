import Controller from "./controllers/Controller.js";
import View from "./views/View.js";
import Model from "../models/Model.js";

const app = new Controller(new Model(), new View());
app.run();