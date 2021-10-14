import React, { Component } from 'react'
import GlassItem from './GlassItem'

export default class GlassComponent extends Component {
    arrGlass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        typeGlass: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    changeGlass = (newGlass) => {
        this.setState({
            typeGlass:newGlass
        })
    }

    renderGlass = () => {
        return this.arrGlass.map((item, index) => {
            return <GlassItem sp={item} changeGlass={this.changeGlass} />
        })

    }
    render() {

        let {typeGlass} = this.state
        return (
            <div>
                <h1 className="py-5">TRY GLASSES APP ONLINE</h1>
                <div className="mb-5">
                    <div>
                        <div className="row m-0 p-0">
                            <div className="col-6 d-flex justify-content-center glass__model" >
                                <div className="card bg-dark " style={{ width: '18rem' }}>
                                    <img src="./glassesImage/model.jpg" className="card-img" alt="..." />
                                    <img className="glass__img" src={typeGlass.url} alt="" />
                                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                                        <div className="content">
                                            <h5 className="card-title">{typeGlass.name}</h5>
                                            <p className="card-text">{typeGlass.desc}</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-6 d-flex justify-content-center" >
                                <div className="card bg-dark" style={{ width: '18rem' }}>
                                    <img src="./glassesImage/model.jpg" className="card-img" alt="..." />

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="Item__content container bg-white px-3 py-5">
                    <div className="row">
                        {this.renderGlass()}
                    </div>
                </div>

            </div>
        )
    }
}






