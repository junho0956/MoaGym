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

- 21.03.10
    - GNB component move to shared-component
    - bug : product click event 
    product component 를 클릭한 상태로 스크롤을 진행하면 스크롤 종료 후 클릭 이벤트가 실행되어서 ItemInfo Component로 페이지 이동이 발생<br>
    fix : 스크롤은 mousedown -> mousemove -> mouseup | mouseleave 의 순서로 진행되는데, 여기서 product component에 click 이벤트를 사용한다면 click 이벤트는 가장 마지막에 실행되므로 click 이벤트를 사용하면 이 버그를 해결할 수 없다고 생각했다. 그래서 click event 를 mousedown + mouseup 이벤트로 변경하여 버그를 수정했다.
    - DataType 정리
- 21.03.09 
    - project clone & readme update

### screenshot

![home1](./src/common/image/home1.PNG)
![home1](./src/common/image/home2.PNG)
![home1](./src/common/image/category1.PNG)
![home1](./src/common/image/category2.PNG)
![home1](./src/common/image/item1.PNG)
![home1](./src/common/image/item2.PNG)

### try



### buildWith

