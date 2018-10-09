import * as React from 'react';

export class Hello extends React.Component <{}, {fecha: Date, datos: Array<number>}>{

    constructor(props: any){
        super(props);
        this.state = {
            fecha: new Date(),
            datos: [1 ,1]
        }
        this.calcularFibonacci(100);
    }

    calcularFibonacci(cantidad: number){
        if(cantidad > 2){
            for(let i = 0; i < cantidad - 2; i++){
                this.state.datos.push(this.state.datos[i] + this.state.datos[i + 1])
            }
        }
    }

    render(){
        return (
            <div>
                <h1>Los primeros {this.state.datos.length} números de Fibonacci</h1>
                <ul>
                    {this.state.datos.map(dato =>
                        <li> { dato }</li>
                    )}
                </ul>
            </div>
        );
    }

}