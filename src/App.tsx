import { _Component } from "./_component";
import "./styles.css";

const SubComp = () => {
  return <h2>Hello SubCompa</h2>;
};

const Comp = (props: any) => {
  const component = new _Component();

  return (
    <>
      <h1>Hello Comp: {component.value}</h1>
      {props.children}
      <button onClick={() => component.increment()}>counter</button>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Comp>
        <SubComp />
        <SubComp />
        <SubComp />
      </Comp>
      <h2>Start editing to see somed magic happen!</h2>
    </div>
  );
}
