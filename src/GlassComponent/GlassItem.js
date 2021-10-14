import React, { Component } from 'react'

export default class GlassItem extends Component {
    render() {
        let { sp, changeGlass } = this.props;
        return (
            <div className="col-2 mx-3 mb-3">
                <div className="card bg-white" style={{ width: '12rem' }}>
                    <button className="btn" onClick={() => {
                        changeGlass(sp);
                    }}><img src={sp.url} className="card-img" alt="..." />
                    </button>

                </div>
            </div>
        )
    }
}
