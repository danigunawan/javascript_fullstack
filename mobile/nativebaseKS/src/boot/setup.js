import React, { Component } from "react";
import { StyleProvider } from "native-base";

import App from "../app";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

export default class Setup extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}
