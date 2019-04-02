import React, { Components } from 'react';
import './ListBook.css';

import image1 from '../image/cover/1.png';
import image2 from '../image/cover/2.jpg';
import image3 from '../image/cover/3.jpg';
import image4 from '../image/cover/4.png';


import ContainerBook from './ContainerBook/ContainerForBook';

class ListBook extends React.Component {
    render() {
        return(
            <div>
                <ul className="ListBook">
                    <ContainerBook title="Изучаем HTML 5" author1="Брюс Лоусон" author2="Реми Шарп" image={ image1 }/>
                    <ContainerBook title="HTML 5: Up and Running" author1="Марк Пилгрим" image={ image2 }/>
                    <ContainerBook title="HTML 5 Canvas" author1="Стив Фултон" author2="Джефф Фултон" image={ image3 }/>
                    <ContainerBook title="Functional JavaScript" author1="Майкл Фогус" image={ image4 }/>
                </ul>
            </div>
        );
    }
}

export default ListBook;