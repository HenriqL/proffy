import React from 'react';


import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';


function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponiveis">

                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject"/>
                    </div>
        
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horas</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
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
                    </footer>
                    <button type="button">
                        <img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                    </button>
                </article>
            </main>

        </div>
    )
}
export default TeacherList