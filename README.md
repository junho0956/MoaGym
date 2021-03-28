MoaGym
===
MoaGym 은 무신사 같은 국내 의류 쇼핑몰처럼 헬스, 요가, 필라테스 등의 의류 만을 모아서 보여주자는 의미로 시작한 프로젝트입니다.

- [stack](#stack)
- [structure](#structure)
- [update](#update)
- [screenshot](#screenshot)
- [try](#try)
- [build](#buildWith)

### stack

- html
- css-in-js(styled-component)
- typescript
- react
- redux(ducks pattern)

### structure

```
common
    - store 및 공통으로 사용할 모듈
interface
    - 인터페이스 모듈  
pageComponent
    - 페이지 컴포넌트
sharedComponent
    - 공통 컴포넌트

```

### update

날짜 내림차순 기준으로 커밋 및 필요한 기록을 정리

- 21.03.28
    - use API
    - update Home, ItemInfo Pages
    - 브랜드 이름을 우선 받은 후에, 각 브랜드 이름을 이용하여 API를 호출
    - 각 브랜드 이름으로 fetch 하기 위해서는 단일 promise로는 pending 처리여부를 알 수 없기 때문에 Promise.all 을 사용
    <br>
    - study
        불변성이 제대로 이루어지지 않아 확인해보니 단일 참조값 뿐만 아니라 객체 내부 속성값 역시 단순 대입으로는 서로 참조한다는 것을 알았고, 금일 작업은 내부 객체를 직접 참조하였지만 비효율적임을 느꼈다. 상태값 변경을 원활히 하기 위해 불변성에 관련된 라이브러리를 사용할 수 있도록 공부해야겠다.
    <br>
    - next todo
        - vertical Product List에 필터기능 추가하기
        <br>
- 21.03.10
    - GNB component move to shared-component
    - bug : product click event 
    product component 를 클릭한 상태로 스크롤을 진행하면 스크롤 종료 후 클릭 이벤트가 실행되어서 ItemInfo Component로 페이지 이동이 발생<br>
    fix : 스크롤은 mousedown -> mousemove -> mouseup | mouseleave 의 순서로 진행되는데, 여기서 product component에 click 이벤트를 사용한다면 click 이벤트는 가장 마지막에 실행되므로 click 이벤트를 사용하면 이 버그를 해결할 수 없다고 생각했다. 그래서 click event 를 mousedown + mouseup 이벤트로 변경하여 버그를 수정했다.
    <br>
    - DataType 정리
    <br>
- 21.03.09 
    - project clone & readme update

### screenshot

![home1](./src/common/image/img_home1.PNG)
![home1](./src/common/image/img_home2.PNG)
![home1](./src/common/image/category1.PNG)
![home1](./src/common/image/category2.PNG)
![home1](./src/common/image/img_itemInfo1.PNG)
![home1](./src/common/image/img_itemInfo2.PNG)

### try
<br>

### buildWith

