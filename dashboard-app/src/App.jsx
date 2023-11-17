import Sidebar from './Components/SideBar/Sidebar';
import TopAnlCard from './Components/TopAnlCard/TopAnlCard';
import RecentOrders from './Components/RecentOrders/RecentOrders'

const App = () => {
  return (
    <div>
      <Sidebar />
      <TopAnlCard />
      <RecentOrders />
    </div>
  )
}

export default App