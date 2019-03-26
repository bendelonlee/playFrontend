const $ = require("jquery");
import './styles.css';

import { getFavorites } from './requests.js'
import { Listener } from './listener.js';

$(document).ready(function() {
  $('#under-nav').height($('nav').height() + 20);
  Listener.prototype.start();
  getFavorites();
});
