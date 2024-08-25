"use client"
import { useState, useEffect } from "react";
import calculator from "./calculate";
import Link from "next/link";
import { Halant } from "next/font/google";

export default function Calculator() {
    const [resultado, setResultado] = useState("0")
    const [color, setColor] = useState("2rem");

    useEffect(() => {
        // Ajusta o tamanho da fonte com base no comprimento do resultado
        if (resultado.length > 12) {
            setColor(`#8D8C8C`); // Tamanho menor para entradas longas
        } else {
            setColor(""); // Tamanho padrão
        }
    }, [resultado]);

    const handleButton = (value: string) => { // função que vai receber o valor do botão
        if (value === "=") { // verifica se o botão é igual
            setResultado(calculator(resultado).toString()) // chama a função calculator e passa o resultado
        } else if (value === "C") { // verifica se o botão é C
            setResultado("0")
        } else if (value === "D") { // verifica se o botão é D
            setResultado(resultado.slice(0, -1))
        } else {
            if (resultado === "0") { // verifica se o resultado é 0
                setResultado(value) // atribui o valor ao resultado
            } else { // se não, adiciona o valor
                setResultado(`${resultado}${value}`) // concatena o valor
            }
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResultado(event.target.value);
    }

    return (
        <div id="main_calculator">
            <Link href="/" id="btn_Start">Back to top</Link>
            <section id="local_calculator">
                <div id="local_Response">
                    <input
                        id="Response"
                        style={{ color: color }}
                        value={resultado}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") // verifica se o botão é igual
                                {setResultado(calculator(resultado).toString())}
                                else if(e.key === "Backspace") // verifica se o botão é D
                                {setResultado(resultado.slice(0, -1))} // chama a função calculator e passa o resultado sem o último caractere.
                        }}
                        onFocus={() => {if(resultado === "0"){setResultado("")}}} // lê o resultado caso o valor seja 0 ele
                        onBlur={() => {if(resultado === ""){setResultado("0")}}} // verifica se o resultado é 0
                    />
                </div>
                <div id="my-grid">
                    <button className="btn btn-padrao1 grid-area-1" onClick={() => handleButton("C")}>C</button>
                    <button className="btn btn-padrao3 grid-area-2" onClick={() => handleButton("D")}>
                        <i className="ri-delete-back-2-fill"></i>
                    </button>
                    <button className="btn btn-padrao3 grid-area-3" onClick={() => handleButton("/")}>/</button>
                    <button className="btn btn-padrao3 grid-area-4" onClick={() => handleButton("x")}>X</button>
                    <button className="btn btn-padrao2 grid-area-5" onClick={() => handleButton("7")}>7</button>
                    <button className="btn btn-padrao2 grid-area-6" onClick={() => handleButton("8")}>8</button>
                    <button className="btn btn-padrao2 grid-area-7" onClick={() => handleButton("9")}>9</button>
                    <button className="btn btn-padrao3 grid-area-8" onClick={() => handleButton("-")}>-</button>
                    <button className="btn btn-padrao2 grid-area-9" onClick={() => handleButton("4")}>4</button>
                    <button className="btn btn-padrao2 grid-area-10" onClick={() => handleButton("5")}>5</button>
                    <button className="btn btn-padrao2 grid-area-11" onClick={() => handleButton("6")}>6</button>
                    <button className="btn btn-padrao3 grid-area-12" onClick={() => handleButton("+")}>+</button>
                    <button className="btn btn-padrao2 grid-area-13" onClick={() => handleButton("1")}>1</button>
                    <button className="btn btn-padrao2 grid-area-14" onClick={() => handleButton("2")}>2</button>
                    <button className="btn btn-padrao2 grid-area-15" onClick={() => handleButton("3")}>3</button>
                    <button className="btn btn-padrao1 grid-area-18" onClick={() => handleButton("=")}>=</button>
                    <button className="btn btn-padrao2 grid-area-16" onClick={() => handleButton("0")}>0</button>
                    <button className="btn btn-padrao3 grid-area-17" onClick={() => handleButton(".")}>.</button>
                </div>
            </section>
        </div>
    )
}