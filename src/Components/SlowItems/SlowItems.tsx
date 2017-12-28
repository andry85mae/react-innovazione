import * as React from 'react';
import { SlowItem } from './SlowItem';
import { randomColor } from '../../Models/common';

export interface SlowItemsProps {
  items: any
}
export interface SlowItemsState {
  items: any
}

export class SlowItems extends React.Component<SlowItemsProps, SlowItemsState>  {

  constructor(props: SlowItemsProps) {
    super(props);

    this.state = {
      items: props.items
    };
  }

  render() {
    return (
      <div className="left">
        <h1>Mutable</h1>
        {this.state.items.map((item: any, index: any) => {
          return <SlowItem
            key={index}
            item={item}
            onClick={this.onChangeItemColor.bind(this, index)} />
        })}
      </div>
    );
  }

  // This is apparently weird and dirty implementation
  onChangeItemColor(index: any) {
    this.state.items[index].color = randomColor();

    this.setState({
      items: this.state.items
    });
  }
};