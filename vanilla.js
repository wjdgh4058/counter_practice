// console.log('vanilla!');

class Counter {
  // 기본 옵션
  defaultOption = {
    count: 1,
    min: 1,
    max: 10,
    step: 1,
  };

  // 클래스 외부에서 전달 받아야 할 것들
  // 어떤 문서의 요소를 카운터 컴포넌트에 만들까?
  // 카운터 컴포넌트의 초깃값, 최솟값, 최댓값, 변경값
  constructor(element, userOptions) {
    // 클래스 내부에서 사용될 지역 변수
    // 클래스로부터 생성된 인스턴스 (this)
    // this.count, this.min...
    // console.log(element);
    // console.log(userOptions);

    this.component = element;
    // 개발자의 옵션과 사용자의 옵션을 병합
    // 전개구문 ...

    this.options = { ...this.defaultOption, ...userOptions };

    this.init();
  }

  // 클래스 필드에 정의된 함수는
  // 클래스로부터 생성된 인스턴스의 메서드 (포함 함수)
  init() {
    console.log("초기화");
  }

  render() {
    console.log("렌더링");
  }
}

// instance (object)
// API (input, output 설계 (design))
// new Counter(domElement, userOptions)
const counter = new Counter(document.querySelector(".counter"), {
  count: 5,
  min: 3,
  max: 20,
  step: 1,
});

counter.render();

console.log(counter.options);
