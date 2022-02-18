import { Controller } from "stimulus";
import $ from "jquery";
import "select2";
import 'select2/dist/css/select2.min.css';

export default class extends Controller {

  connect() {
    $(this.element).select2();
  }
}
