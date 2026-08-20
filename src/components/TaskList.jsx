import { useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React Basics' },
    { id: 2, text: 'Build a Portfolio Project' }
  ]);
  const [input, setInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newTask = { id: Date.now(), text: input };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h3>📝 Project Milestones</h3>
      <form onSubmit={addTask} style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a new goal..."
          style={{ padding: '8px', width: '70%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer', borderRadius: '4px', background: '#007bff', color: 'white', border: 'none' }}>Add</button>
      </form>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
