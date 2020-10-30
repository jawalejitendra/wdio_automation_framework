import Component from './Component';

class Select extends Component {
  setValue(value) {
    this.get().selectByAttribute('value', value);
  }

  getAllValues() {
    return this.get()
      .$$('option')
      .map((option) => option.getValue());
  }
}

export default Select;
