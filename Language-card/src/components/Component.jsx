import react from '../assets/react.svg';
import './Component.scss';
import { languages } from '../../src/helpers/data';
import Card from './Card';

const Component = () => {
    return(
        <div>
            <header><img src={react} alt="" /></header>
            <div className="langContainer">
                <p>Languages</p>
                {languages.map((item, index) => <Card {...item} key={index}/>)}
            </div>
        </div>
        
    )
}

export default Component;