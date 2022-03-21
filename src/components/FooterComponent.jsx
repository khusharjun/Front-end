import React, { Component } from 'react';

class FooterComponent extends Component {

    constructor(props){
        
        super(props)

        this.state={

        }
    }
    

    render() {
        return (
            <div className="disable-select">
                <footer className='footer'>
                    <span className="text-muted">Copyrights reserved</span>
                </footer>
                
            </div>
        );
    }
}

export default FooterComponent;