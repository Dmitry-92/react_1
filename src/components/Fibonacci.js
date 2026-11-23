import { useState } from 'react';
import './Fibonacci.css';

function Fibonacci() {
    const [count, setCount] = useState('');
    const [sequence, setSequence] = useState(null);

    const calculate = () => {
        const n = parseInt(count);

        if (isNaN(n) || n <= 0) {
            setSequence('Введите положительное число');
            return;
        }

        if (n > 50) {
            setSequence('Слишком много чисел (Максимум 50)');
            return;
        }

        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }

        // Если n = 1, выводим только [0]
        const result = n === 1 ? [0] : fib.slice(0, n);
        setSequence(result.join(', '));
    };

    return (
        <div className='fibonacci-container'>
            <div className='fibonacci-card'>
                <h2>Числа Фибоначчи</h2>

                <div className='form-group'>
                    <label>Сколько чисел вывести?</label>
                    <input type="number" className="form-control" value={count} onChange={(e) => setCount(e.target.value)} min="1" />
                </div>
                <button className='btn-calculate' onClick={calculate}>Вычислить</button>

                {sequence != null && (
                    <div className='result-box'>
                        {sequence}
                    </div>
                )}
            </div>
        </div>
    );
}