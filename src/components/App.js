import React from 'react';
import logo from './vera-logo.png';

import './App.css';
import Home from './home/Home';
import Validation from './validation/Validation';
import HelpMenu from "./header/helpMenu/HelpMenu";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header>
                    <img src={logo} alt="logo"/>
                    <h2>PDF/A Conformance Checker</h2>
                    <HelpMenu/>
                </header>
                <article>
                    {this.renderArticle()}
                </article>
                <footer>
                    {/* Here will be components to control info view settings */}
                </footer>
            </div>
        );
    }

    renderArticle() {
        switch (this.props.view) {
            case 'VALIDATION':
                return (<Validation/>);
            case 'HOME':
            default:
                return (<Home/>);
        }
    }
}

export default App;
