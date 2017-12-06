import * as React from 'react';

import {Car} from '../../Models/common'

import * as data from './example.json';

export interface CarListProps { }
export interface CarListState {carList:Array<any>}
// 'HelloProps' describes the shape of props.
export class CarList extends React.Component<CarListProps, CarListState> {

    //carList:Array<any>=[]
    public divStyle:any = {
        height: '162 px'
      };

    public imgStyle = {};
    constructor(prop:CarListProps, state:CarListState){
        super(prop,state);
         /*   let x= new Car();
            console.log(x.Name);*/
        var DuckImage = require('../../images/Car/500C.jpg');

        this.imgStyle={
            width:'180px',
            height:'180px',
            backgroundImage: 'url(' + DuckImage + ')',
            backgroundPosition:'center',
            backgroundSize:'contain',
            backgroundRepeat:"no-repeat"
        }

        this.state = {
            carList:[new Car({
                    Name:'500C',
                    Marca:'Fiat',
                    Targa:'FB654KM',
                    KM:1000,
                    Id:1,
                    image:require('../../images/Car/500C.jpg')
            }),
            new Car({
                Name:'Ferrari',
                Marca:'Ferrari',
                Targa:'FB622KM',
                KM:0,
                Id:2,
                image:require('../../images/Car/ferrari.png')
            }),
            new Car({
                Name:'Punto',
                Marca:'Fiat',
                Targa:'KM345KI',
                KM:10000,
                Id:3,
                image:require('../../images/Car/punto.jpg')
            }),
            new Car({
                Name:'Renault',
                Marca:'Renaul',
                Targa:'UI890LM',
                KM:600,
                Id:4,
                image:require('../../images/Car/renault.jpg')
            }),
            new Car({
                Name:'Serius',
                Marca:'Serius',
                Targa:'YT654MK',
                KM:0,
                Id:5,
                image:require('../../images/Car/serius.jpg')
            })]
          };
    }

    componentDidMount() {
        const word = (data as any).name;
        console.log(word)
      }

    render(){
        return ( 
        <div className="col-lg-12 ">
            <div className="row">
            {this.state.carList.map((car:Car) =>{
                
               
                return <div className="col-md-4" key={car.Id} style={{ marginBottom:'30px'}}>
                    <span className="col-sm-5" style={{ border:'1px solid #f7f7f7'}}>
                    <div className="img-fluid" style={{
                            width:'180px',
                            height:'178px',
                            backgroundImage: 'url(' + car.image + ')',
                            backgroundPosition:'center',
                            backgroundSize:'contain',
                            backgroundRepeat:"no-repeat"                            
                        }}/>
                        </span>
                    <span className="col-sm-7" style={{ backgroundColor:'#f7f7f7',minHeight:'180px'}}>
                        <h3>{car.Name}</h3>
                    </span>
                </div>

            })}
                
                
            </div>
        </div>
        )
    }
}