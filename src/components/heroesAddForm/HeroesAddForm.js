import { useState } from "react"
import { useHttp } from '../../hooks/http.hook';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch} from "react-redux";
import { heroCreated } from '../heroesList/heroesSlice';

const HeroesAddForm = () => {

    const dispatch = useDispatch();


    const { request } = useHttp();

    const [hero, setHero] = useState({
        "id": uuidv4(),
        "name": "",
        "description": "",
        "element": ""
    })

    const onValueChange = (e) => {
        setHero(() => ({ ...hero, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        request('http://localhost:3001/heroes', 'POST', JSON.stringify(hero))
        .then(res => console.log(res, "Easy"))
        .then(dispatch(heroCreated(hero)))
        .catch(err => console.log(err))
        .finally(
            setHero({
                "id": uuidv4(),
                "name": "",
                "description": "",
                "element": ""
            })
        );
    }

    return (
        <form className="border p-4 shadow-lg rounded"
            onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={hero.name}
                    onChange={onValueChange}
                    placeholder="Как меня зовут?" />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="description"
                    className="form-control"
                    id="text"
                    value={hero.description}
                    onChange={onValueChange}
                    placeholder="Что я умею?"
                    style={{ "height": '130px' }} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    value={hero.element}
                    onChange={onValueChange}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;