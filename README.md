# react-easy-hooks

`useScale` возвращает объеrт с свойством `{transition: scale()}`;

В `useScale()` можно передать коэфициент смещения скейла, где:
value < 1 = scale уменьшается;
value > 1 = scale увеличивается;

Пример:

```
import {useScale} from "react-easy-hooks"`

function App ( ) {
    const scale = useScale(1)

    return <div style={scale}></div>
}
```
