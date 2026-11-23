import { useState } from "react";
import './Factorial.css';

function Factorial() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const n = parseInt(number);
        if (isNaN(n) || n < 0) {
            setResult('Введите положительное число');
            return;
        }
        if (n > 170) {
            setResult('Слишком большое число (максимум 170)');
            return;
        }
        let fact = 1;
        for (let i = 2; i <= n; i++) {
            fact *= i;
        }
        setResult(fact);
    };

    return (
        <div className="factorial-container">
            <div className="factorial-card">
                <h2>Вычисление Факториала</h2>
                <div>
                    <label>Введите число: </label>
                    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} min="0" className="form-control" />
                </div>
                <button className="btn-calculate" onClick={calculate}>Вычислить</button>
                {result !== null && (
                    <div className="result-box">
                        Результат: {result}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Factorial;