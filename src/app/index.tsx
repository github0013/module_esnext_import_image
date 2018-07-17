import * as React from "react"

////////////////////////////////////
// when tsconfig.json has
//   "module": "esnext"
////////////////////////////////////

// async load will create "src.random.png"
const Loading = () => <div />
import Loadable from "react-loadable"
const ComponentAsync = Loadable({
  loader: () => import("./Component"),
  loading: Loading
})

// loading directly will NOT create "src.random.png"
// import Component from "./Component"

import image from "./images/1.png"
console.log(image)
export default class App extends React.Component {
  render() {
    return <div />
  }
}
