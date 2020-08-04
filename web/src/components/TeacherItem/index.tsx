import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import  './styles.css';

function TeacherItem (){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://scontent.frec31-1.fna.fbcdn.net/v/t1.0-9/106665794_4008828212522036_7010429114915485257_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=TpyPnh_PMRkAX9KBx3M&_nc_ht=scontent.frec31-1.fna&oh=4bbcd8f2f913c05564fe6878e1c01a5b&oe=5F50C8A3" alt="Lavinia Dantas"/>
            <div>
                <strong>Lavinia Dantas</strong>
                <span>Marketing</span>
            </div>
        </header>

        <p>
            Te ensino a ser uma empreenderora de sucesso.
            <br /> <br />
            Em 90 dias te garanto sucesso e fama. Mas não garanto seu dinheiro de volta.
        </p>

        <footer>
            <p>
                Preço / Hora
                <strong>R$ 100,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>

    </article>
    )
}

export default TeacherItem;