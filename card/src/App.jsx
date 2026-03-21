import React,{ useState, useEffect} from 'react'
import Card from './components/Card';

const App = () => {
  const [user, setUser] = useState([]);
      const [loading, setLoading] = useState([true]);
  
      useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => {
              setUser(data);
              setLoading(false);
          })
          .catch(() => {
              setLoading(false);
          })
      }, []);
  
    return (
      <div className='w-400 h-300 flex flex-col'>
          {loading ? (<p> Loading.....</p>) :
              (<div className='flex flex-wrap items-center justify-center gap-3 min-h-screen mt-5'>
                  {user.map(user => (
                      <Card key={user.id} user={user} />
                  ))}
              </div>
          )}
      </div>
  );
}

export default App
