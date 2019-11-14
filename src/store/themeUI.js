import { observable, action, decorate } from 'mobx';
import themeLight from './../theme/light';
import themeDark from './../theme/dark';

class ThemeUI {
  constructor() {
    this.currentTheme = themeLight;
  }

  changeTheme() {
    if (JSON.stringify(this.currentTheme) === JSON.stringify(themeLight)) {
        this.currentTheme = themeDark
    } else {
        this.currentTheme = themeLight
    }
  }
}

decorate(ThemeUI, {
  currentTheme: observable,
  changeTheme: action
})

const themeUI = new ThemeUI();

export default themeUI;
export { ThemeUI };
