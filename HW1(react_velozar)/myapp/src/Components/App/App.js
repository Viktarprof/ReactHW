import Header from "../Header/Header";
import style_app from './App.module.css'
import Offer from "../Offer_info/Offer";
import Other from "../Other_info/Other";
import Service from "../Service/Service";
import Rent from "../Rent/Rent";
// import { service_data } from '../../data/services';

function App(){
    let data = [
        {id:1, title:'Годовое ТО', background: '#22356F'},
        {id:2, title:'Выравнивание колес', background: '#0052C1'},
        {id:3, title:'Настройка переключателей', background: '#76B58B'},
    ];

    return(
        <div>
            <div style = {{backgroundColor: '#F4F9E2'}}>
                <Header/>
            </div>
            <div style ={{backgroundColor: '#62D0DF'}}>
                <Offer/>
            </div>
            <div>
                <Other/>
            </div>
            <div className={`${style_app.cards} ${style_app.container_cards}`}>   
                {data.map((elem)=><Service
                                    key={elem.id}
                                    title = {elem.title}
                                    background = {elem.background}
                                />)}
            
                {/* или по отдельности в ручную
                <Service title = {'Годовое ТО'}  background = {'#22356F'}/>
                <Service title = {'Выравнивание колес'}  background = {'#0052C1'}/>
                <Service title = {'Настройка переключателей'}  background = {'#76B58B'}/> */}
            </div>
            <div className={`${style_app.container_cards}`}>
                <Rent/>
            </div>

        </div>
        
    )
}
export default App