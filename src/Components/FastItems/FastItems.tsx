import * as React from 'react';
import { FastItem } from './FastItem';
import { randomColor } from '../../Models/common';

export interface FastItemsProps {
    items: any
}
export interface FastItemsState {
    items: any
}


export class FastItems extends React.Component<FastItemsProps, FastItemsState> {

    constructor(props: FastItemsProps) {
        super(props);

        this.state = {
            items: props.items
        };
    }

    shouldComponentUpdate(nextProps: FastItemsProps, nextState: FastItemsState) {
        return nextState.items !== this.state.items;
    }

    onChangeItemColor(index: any) {
        const newImmutableItems = this.state.items.set(index,
            this.state.items.get(index).set('color', randomColor())
        );

        this.setState({
            items: newImmutableItems
        });
    }

    render() {

        return (
            <div>
                <h1>Immutable</h1>
                {this.state.items.map((item: number, index: number) => {
                    return <FastItem
                        key={index}
                        item={item}
                        onClick={ () => this.onChangeItemColor( index)} />
                })}
            </div>
        )
    }

}

