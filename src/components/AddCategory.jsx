import { useState } from "react"
import { getCharacter } from "../helpers/getGifts"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onChange = ({ target }) => {
        setInputValue(target.value);


    }

    const onSubmit = async (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        const res = await getCharacter(input.value.trim());
        console.log("resultado de busqueda:   ", res);


        onNewCategory(inputValue.trim());
        setInputValue('');

    }

    return (

        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Busca tu Gif"
                value={inputValue}
                onChange={onChange}



            />
        </form>


    )
}