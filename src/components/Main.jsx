import { useState } from "react";

export default function Main() {

    const [nome, setNome] = useState("");
    const [number, setNumber] = useState(0);

    return (

        <main>
            <form>
                <input
                    type="text"
                    name="" id=""
                    onChange={(event) => setNome(event.target.value)}
                />
                {nome}

                <input
                    type="number"
                    name="" id=""
                    onChange={(event) => setNumber(event.target.value)}
                />
                {number}
                <button>cadastrar</button>
            </form>
        </main>

    );
}