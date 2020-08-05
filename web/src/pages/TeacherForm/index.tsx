import React, { useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';


function TeacherForm(){
    const [scheduleItems, setScheduleItens] = useState([
        { week_day: 0, from: '', to: ''}
    ]);

    function addNewScheduleItem(){
        setScheduleItens([
            ...scheduleItems,
            { week_day: 0, from: '', to: ''}

        ])
        scheduleItems.push({
            week_day: 0,
            from: '',
            to: ''
        })

    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que você quer dar aulas" 
                description="O primeiro passo é preencher o formulario de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
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

                    <Input name="cost" label="Custo da sua hora por aula"/>
                   
                </fieldset>

                <fieldset>
                    <legend>
                        Horarios disponiveis
                        <button type="button" onClick={addNewScheduleItem}>+ Novo horario</button>
                    </legend>

             
                  {scheduleItems.map(scheduleItem =>{
                      return (
                        <div key={scheduleItem.week_day} className="schedule-item">
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
                        <Input name="from" label="Das" type="time"/>
                        <Input name="to" label="Até" type="time"/>
                    </div>
                      )
                  })}  
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br />

                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main>
        </div>
    )
}
export default TeacherForm;