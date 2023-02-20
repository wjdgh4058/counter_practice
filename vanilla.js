// console.log('vanilla!');

class Counter {
  // 기본 옵션 (개발자가 설정한)
  // 인스턴스 생성 과정 없이 바로 접근/조작할 수 있게 한다.
  // 정적인(static) 메서드
  // static
  static defaultOption = {
    count: 1,
    min: 1,
    max: 10,
    step: 1,
  };

  #component = null;
  #options = null;

  // 컴포넌트 상태
  #count = 0; // number

  get count() {
    return this.#count;
  }
  // set count(newCountValue) {
  //   this.#count = newCountValue;
  // }

  // 클래스 외부에서 전달 받아야 할 것들
  // 어떤 문서의 요소를 카운터 컴포넌트에 만들까?
  // 카운터 컴포넌트의 초깃값, 최솟값, 최댓값, 변경값
  constructor(element, userOptions) {
    // 클래스 내부에서 사용될 지역 변수
    // 클래스로부터 생성된 인스턴스 (this)
    // this.count, this.min...
    // console.log(element);
    // console.log(userOptions);

    this.#component = element;
    // 개발자의 옵션과 사용자의 옵션을 병합
    // 전개구문 ...

    this.#options = { ...Counter.defaultOption, ...userOptions };

    this.#count = this.#options.count;

    this.#init();
  }
  #incrementButton = null;
  #decrementButton = null;
  #output = null;

  // 클래스 필드에 정의된 함수는
  // 클래스로부터 생성된 인스턴스의 메서드 (포함 함수)
  #init() {
    // console.log("초기화");
    // 뷰의 요소 접근/참조
    // 인스턴스 비공개 멤버(변수
    this.#incrementButton = this.#component.querySelector("button:first-child");
    this.#decrementButton = this.#component.querySelector("button:last-child");
    this.#output = this.#component.querySelector("output");

    // 이벤트 핸들링
    // React 이벤트 위임
    // this.#component.addEventListener("click", (e) => {
    //   const { target } = e;
    //   console.log(target);
    // });

    // 직접 각 버튼에 이벤트 걸기
    this.#incrementButton.addEventListener("click", this.handleIncrement);
    this.#decrementButton.addEventListener("click", this.handleDecrement);

    this.render();
  }

  /* handleIncrement(e) {
    // console.log(this);
    // console.log(e.target);
    // props: step, max
    // state: this.#count (읽기), this.setCount (쓰기)
    const { step, max } = this.#options;
    // console.log(step, max);
    let updateCountValue = this.count + step;

    if (updateCountValue > max) {
      console.log("max 값보다 업데이트 할 값이 커요!!");
      updateCountValue = max;
    }
    this.setCount(updateCountValue);
  }

  handleDecrement(e) {
    console.log(this);
    console.log(e.target);
  }

  render() {
    // console.log(this.#output);
    this.#output.value = this.count; // this.#count
  }
  renderIncrementButton() {
    this.#incrementButton.disabled = true;
  }

  setCount(newCountValue) {
    this.#count = newCountValue;
    this.render();
  }
} */

  handleIncrement = (e) => {
    // props: step, max
    const { step, max } = this.#options;

    // state: this.#count (읽기), this.setCount (쓰기)
    // console.log(this.count);

    let updateCountValue = this.count + step;
    // updateCountValue vs. max 비교
    if (updateCountValue > max) {
      updateCountValue = max;
      this.renderIncrementButton();
    }

    this.setCount(updateCountValue);
  };

  handleDecrement = (e) => {
    // console.log(this);
    // console.log(e.target);
    // props: step, max
    const { step, min } = this.#options;

    // state: this.#count (읽기), this.setCount (쓰기)
    // console.log(this.count);

    let updateCountValue = this.count - step;
    // updateCountValue vs. max 비교
    if (updateCountValue < min) {
      updateCountValue = min;
      this.renderDecrementButton();
    }

    this.setCount(updateCountValue);
  };

  // public instance methods
  render() {
    this.#output.value = this.count;
  }

  renderIncrementButton() {
    console.log("update increment button disabled state");
    this.#incrementButton.disabled = true;
  }

  renderDecrementButton() {
    console.log("update increment button disabled state");
    this.#decrementButton.disabled = true;
  }

  // 비공개인 this.#count를 업데이트 할 수 있는 인스턴스 메서드
  // React 클래스 컴포넌트의 this.setState()

  // 1. static method
  // 2. instance method
  setCount(newCountValue) {
    this.#count = newCountValue;
    this.render();
  }
}
// instance (object)
// API (input, output 설계 (design))
// new Counter(domElement, userOptions)
const myCounter = new Counter(document.querySelector(".counter"), {
  count: 5,
  min: 3,
  max: 20,
  step: 1,
});

// setTimeout(()=> myCount)

// myCounter.render();

// console.log(counter.#options);
// console.log(counter.component);

// 외부에서 다른 개발자에 의해 접근되는 것을 원하지 않음
// 공개 또는 비공개
// counter.init();

// Counter.defaultOption = {
//   count: 1,
//   min: 1,
//   max: 10,
//   step: 1,
// };
