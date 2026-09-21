import { Greeting ,WelcomeMessage} from "./Greeting";
import Usercard from "./Custom"
import Blog from "./Blog";
import UserCard from "./Usercard";


function App() {
  return (
    
  <div>
    <Usercard/>
    <Blog />
<UserCard
        name="John Doe"
        email="john.doe@example.com"
      />

      <UserCard
        name="Ali Ahmed"
        email="ali@example.com"
      />

      <UserCard
        name="Mohamed Hassan"
        email="mohamed@example.com"
      />

  </div>

  );
}

export default App


