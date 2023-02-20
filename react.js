// console.log('react!');

class Counter extends React.Component {
  // 개발자의 기본 props
  static defaultProps = {
    min: 1,
    count: 1,
    max: 10,
    step: 1,
  };

  // 업데이트 가능한 상태
  // 최초의 1회만 props → state (파생)
  state = {
    count: this.props.count,
  };

  render() {
    // const { step, min, max } = this.props;
    const { count } = this.state;

    return (
      <div class="counter">
        <button
          type="button"
          onClick={this.handleIncrement}
          aria-label="카운트 1 증가"
        >
          +
        </button>
        <output aria-live="polite">{count}</output>
        <button
          type="button"
          onClick={this.handleDecrement}
          aria-label="카운트 1 감소"
        >
          -
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    const { step, max } = this.props;
    this.setState({
      count: this.state.count + step,
    });
  };

  handleDecrement = () => {
    const { step, min } = this.props;
    this.setState({
      count: this.state.count - step,
    });
  };
}

// ReactDOMRoot { render }
ReactDOM.createRoot(
  document.querySelector('[data-component="Counter"]')
).render(
  <>
    <Counter count={3} step={2} />
    {/* 사용자의 props */}
    <Counter min={5} max={15} count={9} />
    <Counter min={5} max={15} count={10} step={3} />
  </>
);
