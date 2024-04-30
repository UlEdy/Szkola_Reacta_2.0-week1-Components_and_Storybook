import './App.css';
import { Post, Task } from './components';
import { Text, ButtonBlue, ButtonRed, ButtonGreen, Checkbox } from './ui';

import { dataPost } from './assets/dataPost';

function App() {
    return (
        <div className='flex flex-col items-center'>
            <Task>
                <Text>Task 1: Create React project</Text>
                <Checkbox
                    name='done'
                    label='Done'
                />
            </Task>
            <Task>
                <Text>Task 2: Working with components</Text>
                <div className='flex flex-col items-center'>
                    <ButtonBlue />
                    <ButtonRed />
                    <ButtonGreen />
                </div>
            </Task>
            <Task>
                <Text>Task 3: React basics</Text>
                {dataPost.map(({ title, description }, i) => (
                    <Post
                        header={title}
                        content={description}
                        key={i}
                    />
                ))}
            </Task>
            <Task>
                <Text>Task 4: Exploring dev tools</Text>
                <Checkbox
                    name='storybook'
                    label='Storybook'
                />
            </Task>
        </div>
    );
}

export default App;
