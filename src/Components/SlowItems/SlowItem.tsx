import * as React from 'react';

export interface SlowItemProps { 
  item:any,
  onClick:Function
}
export interface SlowItemState {
  item:any
}

export class SlowItem extends React.Component<SlowItemProps, SlowItemState> {
  constructor(props:SlowItemProps)
  {
      super(props);
  }

  render() {
    const style = {
      color: this.props.item.color
    };

    return <span style={style} onClick={this.onClick.bind(this)}>{this.props.item.item}</span>
  }

  onClick() {
    this.props.onClick();
  }
}