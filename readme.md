# jsx -> virtualDOM 형태 참고

jsx:

```jsx
<div id="App">
  <span>설명</span>
  <button
    onClick={() => {
      console.log("버튼");
    }}
  >
    버튼
  </button>
</div>
```

virtualDOM:

```javascript
   {
     tag: "div",
     props: {
      id: 'App'
     },
     children: [
       { tag: "span", props: {}, children: "설명" },
       {
         tag: "button",
         props: {
           onClick: () => {
             console.log("버튼");
           },
         },
         children: "버튼",
       },
     ],
   };
```

## 놓쳤던 부분

- 문제 : jsx에서 button요소에 onClick이벤트가 동작하지않았음.
- 원인 : virtual DOM을 real DOM으로 변환하는 과정 중,createElement만 작업 (props 반영 x)

  - virtual DOM의 tag에 따라 document.createElement를 호출했지만, 이 과정에서 props를 반영하지 못함.

  - props에 포함된 정보(예: id, className)를 DOM요소에 적용해야 하고,
  - 이벤트 핸들러(에: onClick, onChange 등)도 올바르게 DOM에 바인딩해야함.

    ```javascript
    Object.keys(virtualDOM.props || {}).forEach((prop) => {
      if (prop.startsWith("on")) {
        const eventType = prop.toLowerCase().substring(2);
        realDOM.addEventListener(eventType, virtualDOM.props[prop]);
      } else {
        realDOM[prop] = virtualDOM.props[prop];
      }
    });
    ```

- 결과 :

  ```html
  <!-- Before -->
  <div>
    <span>설명</span>
    <button>버튼</button>
  </div>
  ```

  ```html
  <!-- After -->
  <div id="App">
    <span>설명</span>
    <button class="add-button">버튼</button>
  </div>
  ```
