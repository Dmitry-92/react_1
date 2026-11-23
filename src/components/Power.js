import { useState } from "react";
import './Power.css';

function Power() {
    const [base, setBase] = useState('');
    const [exponent, setExponent] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const b = parseFloat(base);
        const e = parseFloat(exponent);

        if (isNaN(b) || isNaN(e)) {
            setResult('Введите числа');
            return;
        }
        if (e < 0 && b === 0) {
            setResult('Деление на ноль невозможно');
            return;
        }

        const res = Math.pow(b, e);
        setResult(res);
    };

    return (
        <div className="power-container">
            <div className="power-card">
                <h2>Возведение в степень</h2>

                <div className="form-group">
                    <label>Основание:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={base}
                        onChange={(e) => setBase(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Показатель степени:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={exponent}
                        onChange={(e) => setExponent(e.target.value)}
                    />
                </div>

                <button className="btn-calculate" onClick={calculate}>
                    Вычислить
                </button>

                {result !== null && (
                    typeof result === 'number' ? (
                        <div className="result-box">
                            Результат: {result}
                        </div>
                    ) : (
                        <div className="error-box">
                            {result}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}