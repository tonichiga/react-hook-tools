# react-easy-hooks

`useScale` возвращает объект с свойством `{transition: scale()}`;

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

`useZoom` возвращает объект с свойством `{zoom: value}`;

В `useZoom()` можно передать коэфициент смещения скейла, где:
value < 1 = scale уменьшается;
value > 1 = scale увеличивается;

Пример:

```
import {useZoom} from "react-easy-hooks"`

function App ( ) {
    const zoom = useZoom(1)

    return <div style={zoom}></div>
}
```

`useSubmitOnEnter` вызывает фукнцию которую передаете вторым параметром в вызов функции-хука;
Первым в выхов хука передаёте "event", вторым "функцию которую нужно вызвать", третьим "объект который нужно передать в вызванную функцию".

Пример:

```
import {useSubmitOnEnter} from "react-easy-hooks"`

function App ( ) {
    const submitOnEnter = useSubmitOnEnter()

    const handleSubmit (object) => {
        // ...ваша логика
    }

    return <textarea onKeyDown={(e) => submitOnEnter(e, handleSubmit, {name: "mango"})}/>
}
```
