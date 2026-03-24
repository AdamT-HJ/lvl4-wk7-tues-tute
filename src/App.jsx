import "./App.css";
import ProjectLibrary from "./pages/projectLibrary/ProjectLibrary";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
// import from assets
import animation from './assets/Home/animation.png'

function App() {

  

  return (
  <>

    {/* importing from public */}
    <img src="/images/projects/Project01-instructions.png" alt="image" />
    
    <div>
      Start your Mission X here!🕺
    </div>

    <ProjectLibrary></ProjectLibrary>

    <StudentDashboard></StudentDashboard>

  </>
  )
}

export default App;
