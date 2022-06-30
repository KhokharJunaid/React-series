import logo from "./logo.svg";
import "./App.css";
import Salam from "./components/Greet";
import Welcome from "./components/welcome";
import Jsx from "./components/jsx";
import Message from "./components/Message";
import Practice from "./components/practice";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import ParentComponent from "./components/ParentComponent";
import PracticeParentComp from "./components/PracticeParentComp";
import ConditionalOperator from "./components/ConditionalOperator";
import NewList from "./components/NewList";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import ReactFragment from "./components/ReactFragment";
import NewTable from "./components/homePractice/NewTable";
import ParentComp from "./components/pureComponents/ParentComp";
import Refs from "./components/Refs/Refs";
import ParentRef from "./components/Refs/ParentRef";
import InputRef from "./components/Refs/InputRef";
import ParentFR from "./components/Refs/ParentFR";
import PortalDemo from "./components/portal/PortalDemo";
import Hero from "./components/Error boundary/Hero";
import ErrorBoundary from "./components/Error boundary/ErrorBoundary";
import ClickCounter from "./components/highOrderComponent/ClickCounter";
import HoverCounter from "./components/highOrderComponent/HoverCounter";
import ClickCount from "./components/highOrderComponent/highOrderPractice/ClickCount";
import HowerCount from "./components/highOrderComponent/highOrderPractice/HowerCount";
import CounterTwo from "./components/highOrderComponent/RenderProp/CounterTwo";
import ClickCountTwo from "./components/highOrderComponent/RenderProp/ClickCountTwo";
import HowerCountTwo from "./components/highOrderComponent/RenderProp/HowerCountTwo";
import ComponentC from "./components/Context/ComponentC";
import { UserProvider } from "./components/Context/UserContext";
import { ThemeProvider } from "./components/Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="junaid">
        {/* ThemeProvider value is by default set so we donot need to use themeprovider here */}
        <ComponentC />
      </UserProvider>

      {/* working as a render prop */}

      {/* <CounterTwo
        render={(count, incrementCount) => (
          <ClickCountTwo incrementCount={incrementCount} count={count} />
        )}
      />

      <CounterTwo
        render={(count, incrementCount) => (
          <HowerCountTwo incrementCount={incrementCount} count={count} />
        )}
      /> */}

      {/* as a children prop */}
      {/* <CounterTwo>
        {(count, incrementCount) => (
          <HowerCountTwo incrementCount={incrementCount} count={count} />
        )}
      </CounterTwo> */}

      {/* <ClickCount name="Junaid" />
      <HowerCount /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <PortalDemo /> */}
      {/* <ParentFR /> */}
      {/* <ParentRef /> */}
      {/* <Refs /> */}
      {/* <ParentComp /> */}
      {/* <NewTable /> */}
      {/* <ReactFragment /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline /> */}
      {/* <NewList /> */}
      {/* <ConditionalOperator /> */}
      {/* <PracticeParentComp /> */}
      {/* <ParentComponent /> */}
      {/* <EventBinding /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter />
      <Practice />
      <Salam name="Bruce" gender="he" knownAs="Batsman"></Salam>
      <Welcome name="Diana" gender="she" knownAs="Wonder women" /> */}
      {/* <Message /> */}
      {/* <Salam name="Bruce" gender="he" knownAs="Batsman">
        <p>This is a first element's paragraph</p>
      </Salam>
      <Salam name="Clark" gender="he" knownAs="Superman">
        <button>Action</button>
      </Salam>
      <Salam name="Diana" gender="she" knownAs="Wonder women" /> */}
      {/* same as for class component just look the code of welcome.js */}
      {/* <Welcome name="Bruce" gender="he" knownAs="Batsman" />
      <Welcome name="Clark" gender="he" knownAs="Superman" />
      <Welcome name="Diana" gender="she" knownAs="Wonder women" /> */}
      {/* <Jsx /> */}
    </div>
  );
}

export default App;
