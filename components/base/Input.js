import Component from './Component';

class Input extends Component {
  set(value) {
    this.get().setValue(value);
  }
}

export default Input;
