import root from 'react-shadow';
import ComponentBridge from "./core/ComponentBridge";
import ImageCard from "./features/ImageCard";
import ClockCard from "./features/ClockCard";

function App() {


  return (
    <root.div>
      React features are now accessible from the AngularJS app
      <ComponentBridge components={{
        'clock-card': ClockCard,
        'image-card': ImageCard
      }
      }/>
    </root.div>
  )
}

export default App
