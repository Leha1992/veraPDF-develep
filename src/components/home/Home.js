import React from 'react';
import {Button} from 'reactstrap';
import './Home.css';
import SelectPDFButton from "./SelectPDFButton.container";


class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <SelectPDFButton renderButton={(openFileDialog) => {
                    return (
                        <Button color="success" className="files-button" onClick={openFileDialog}>
                            <span>Choose PDF file</span>
                            <small>or directory</small>
                        </Button>
                    );
                }}/>
            </div>
        );
    }
}

export default Home;