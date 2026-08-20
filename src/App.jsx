import TaskList from './components/TaskList';
import Weather from './components/Weather';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>🚀 Developer Dashboard</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Welcome back! Here is your day at a glance.</p>
      <Weather />
      <TaskList />
    </div>
  );
}
