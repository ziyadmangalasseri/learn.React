import React from "react";

// This is class based component
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo:{
        name:"waiting",
        avatar_url:"dummy"
      }
    };
    // console.log("child constructor");
  }

  async componentDidMount() {
    // console.log(" child component did mount");
    const data = await fetch("https://api.github.com/users/ziyadmangalsseri");
    const json = await data.json();
    //  this.timer = setInterval(() => {
    //   console.log("working componet did mount");
      
    // }, 1000);
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  async componentDidUpdate(){

  }
   
  async componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    const { name,avatar_url } = this.state.userInfo;
    // console.log("child render");

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h1>{name}</h1>
       
        <h3>Mankada Pallippuram</h3>
      </div>
    );
  }
}

export default UserClass;
