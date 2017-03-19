import React,{Component} from 'react';

class Sub extends Component {
  constructor(props){
    super(props);
    this.state = {
      info:"我是子组建，我从state而来"
    };
    this.clickHander = this.clickHander.bind(this);
  }

  clickHander() {
    this.setState({
      info:"我其实是子组件，嘻嘻，刚刚打错字了"
    });
  }

  render(){
    return (
      <div className="Sub">
        <div className="Subtitle">
          <h2>{this.props.subtitle}</h2>
        </div>
        <div className="Subinfo">
          <p>{this.state.info}</p>
        </div>
        <div className="SubHandle">
          <p onClick={(e) => this.clickHander(e)}>点我修正描述文字</p>
        </div>
      </div>
    );
  }
}

export default Sub;
