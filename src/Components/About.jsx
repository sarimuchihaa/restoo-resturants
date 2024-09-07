import React, {useContext, useEffect} from 'react';
import NoteContext from '../Context/Notes/NoteContext.jsx';

const About = () => {
  const aboutContext = useContext(NoteContext);
  useEffect(() => {
    aboutContext.update();
  }, [])
  

  
  return (
    <div>This is About {aboutContext.state.name} and he is {aboutContext.state.age} years old⚽.</div>
  )
}

export default About;