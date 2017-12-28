import * as React from 'react';

export interface FastItemProps {
  item: any;
  onClick: Function;
}
export interface FastItemState {
  item: any;
}

export class FastItem extends React.Component<FastItemProps, FastItemState> {

  constructor(props: FastItemProps) {
    super(props);

  }
  shouldComponentUpdate(nextProps: FastItemProps) {
    return nextProps.item !== this.props.item;
  }

  render() {
    const style = {
      color: this.props.item.get('color')
    };

    return (
      <span style={style} onClick={() => this.onClick()}>
        {this.props.item.get('item')}
      </span>
    );
  }

  onClick() {
    this.props.onClick();
  }
}