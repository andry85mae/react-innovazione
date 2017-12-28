import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { SlowItems } from '../SlowItems/SlowItems'
import { FastItems } from '../FastItems/FastItems'

import * as Immutable from 'immutable'
import { randomColor,ItemExampleRecord } from '../../Models/common';

const GENERATED_ITEMS_COUNT = 10000;

export interface ImmutableExampleProps extends RouteComponentProps<any> {

}
export interface ImmutableExampleState {

}

export class ImmutableExample extends React.Component<ImmutableExampleProps, ImmutableExampleState> {

    public mutableItems: any = [];
    public immutableItems: any = [];

    constructor(prop: ImmutableExampleProps) {
        super(prop)
        for (let i = 0; i < GENERATED_ITEMS_COUNT; i++) {
            this.mutableItems.push({
                item: i,
                color: randomColor()
            });
        }

        let x= new ItemExampleRecord(null);
        x.name
        x.set("name","Andrea");
        x.get("prova");
        this.immutableItems = Immutable.fromJS(this.mutableItems);

    }

    render() {

        return (
            <div>
                <SlowItems items={this.mutableItems} />
                <FastItems items={this.immutableItems} />
            </div>
        )
    }

}