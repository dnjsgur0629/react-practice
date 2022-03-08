import React, { useEffect, useState } from "react";
import withLoading from "./withLoading";

function Button() {
  return <button>Button</button>;
}
//export할 때 HOC사용
export default withLoading(Button);
