const $ = require("jquery");
import './styles.css';

import { Listener } from './listener.js';

$(document).ready(function() {
  Listener.prototype.start();
});
