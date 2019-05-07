import React, {Component} from "react";
import Nav from './Nav';
import Home from './Home';
import Footer from "./Footer";


class App extends Component {
    render() {
        const pages = [
            {
                'page': 'About',
            },
            {
                'page': 'Professional',
            },
            {
                'page': 'Travel',
            },
            {
                'page': 'Photography',
            }
        ];

        return (
            <div id='container'>
                <Home />
                <Nav pageNames={pages} />
                <Footer/>
            </div>
        );
    }
}

export default App;