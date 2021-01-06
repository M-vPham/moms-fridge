import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import { Button } from 'semantic-ui-react';
//http://reactcommunity.org/react-transition-group/transition
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, bottom ${duration}ms ease-in-out`,
  opacity: 0,
  position: 'relative',
  bottom: '-20px'
}

const transitionStyles = {
  entering: { opacity: 1, bottom: '0px' },
  entered:  { opacity: 1, bottom: '0px' },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Fade = ({ in: inProp, children }) => (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
);

const Home = () => {

    const [inProp, setInProp] = useState(true);
    const handleToggle = () => setInProp(!inProp);

    return (
      <div>
        <section className="section">
            <Button
                className="is-primary"
                onClick={handleToggle}
            >
            Toggle
            </Button>
            <Fade in={inProp}>
                <h2 className="title is-2 huge">Don't know what to eat <br/> AND have limited supplies? </h2>
            </Fade>
        </section>
      </div>
    );
}

export default Home