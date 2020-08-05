import React from 'react';


import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import './styles.css';






function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponiveis">

                <form id="search-teachers">
                <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            {value: 'Marketind Digital', label: 'Marketing Digital'},
                            {value: 'Desenvolvimento web', label: 'Desenvolvimento web'},
                            {value: 'Desenvolvimento de sistemas', label: 'Desenvolvimento de sistemas'},
                            {value: 'Git e Github', label: 'Git e Github'},
                            {value: 'Tipografia', label: 'Tipografia'},
                            {value: 'Lettering', label: 'Lettering'},
                            {value: 'Desing', label: 'Desing'},
                        ]
                        }
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-Feira'},
                            {value: '2', label: 'Terça-Feira'},
                            {value: '3', label: 'Quarta-Feira'},
                            {value: '4', label: 'Quinta-Feira'},
                            {value: '5', label: 'Sexta-Feira'},
                            {value: '6', label: 'Sabado'},
                            
                        ]
                        }
                    />
                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>

        </div>
    )
}
export default TeacherList