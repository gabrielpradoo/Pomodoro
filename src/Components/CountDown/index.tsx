import { useEffect, useState } from "react";
import './style.css'


export default function CountDown() {
    const [minutesStudy, setMinutesStudy] = useState(1);
    const [minutesRelax, setMinutesRelax] = useState(1);
    const [start, setStart] = useState(false);
    const [timer, setTimer] = useState(minutesStudy * 60)
    const [tipoTimer, setTipoTimer] = useState(true);


    const handleStartTime = () => {
        setTimer(minutesStudy * 60)
        setStart(timer => !timer)
    }

    useEffect(() => {
        let interval: any;
        if (start == true && timer > 0) {
            interval = setInterval(() => setTimer(timer - 1), 1000)
        } else if (start && timer === 0) {
            setStart(false)
            if (tipoTimer) {
                handleRelax()
            } else {
                handleStudy()
            }
        }
        return () => clearInterval(interval)
    }, [timer, start, tipoTimer])

    const handleRelax = () => {
        setTipoTimer(false)
        setTimer(minutesRelax * 60)
        setStart(true)
    }

    const handleStudy = () => {
        setTipoTimer(true)
        setTimer(minutesStudy * 60)
        setStart(true)
    }

    const handlePauseTime = () => {
        setStart(start => !start)
    }

    return (
        <div className="container">

            <div className="time-container">
                <h3>
                    {tipoTimer ? 'Tempo de Descanso' : 'Tempo de Estudo'}
                </h3>
                <h2> {timer}</h2>

            </div>

            <div className="input-container">
                <div className="study-container">
                    <p>Quantos minutos quer estudar/trabalhar?</p>
                    <input type="number" name="study-time" id="study-time"
                        onChange={e => { setMinutesStudy(parseInt(e.target.value)) }
                        } />
                </div>

                <div className="relax-container">
                    <p>Quantos minutos quer descansar?</p>
                    <input type="number" name="relax-time" id="relax-time" onChange={e => setMinutesRelax(parseInt(e.target.value))} />
                </div>
            </div>
            <div className="btn-container">
                <div className="buttons" >
                    <button className={!start ? "start mainbtn" : "pause mainbtn"} onClick={handleStartTime}>
                        {!start ? 'Iniciar' : 'Resetar'}
                    </button>
                    <button className={!start ? "start mainbtn" : "pause mainbtn"} onClick={handlePauseTime}>
                        {!start ? 'Voltar' : 'Pausar'}
                    </button>

                </div>
            </div>
        </div>
    )
}
