import React from "react";
import Loading from "./Loading";
import Switch from "./app/routers/Switch";

export default class extends React.Component {
  state = {
    isLoading: true,
    //id:null, pw:null 이런식으로 해보기
  };
  componentDidMount = async () => {
    setTimeout(() => {
      this.setState({ isLoading: false }); //Loading으로 넘어가서 작업하려면 true로 바꾸면 됨
    }, 2500); //2.5초후에 Login화면으로 전환됨
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return <Switch />;
    }
  }
}
