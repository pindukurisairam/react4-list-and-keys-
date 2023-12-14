import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },

  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Frontend Developer',
  },

  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },

  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },

  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jimmy',
    role: 'Software Developer',
  },

  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: ' Lane',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    {/* <ul>
      <UserProfile userDetails={userDetailsList[0]} />
      <UserProfile userDetails={userDetailsList[1]} />
      <UserProfile userDetails={userDetailsList[2]} />
      <UserProfile userDetails={userDetailsList[3]} />
      <UserProfile userDetails={userDetailsList[4]} />
      <UserProfile userDetails={userDetailsList[5]} />
    </ul> or */}

    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} />
      ))}
    </ul>
  </div>
)

export default App
