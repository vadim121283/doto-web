import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const Dotos = ({dotos, onRemove}) => {

    return (
      <TransitionGroup component="ul" className="list-group">
        {dotos.map(doto => (
          <CSSTransition key={doto.id} classNames={'doto'} 
          timeout={800}
          >
            <li className="list-group-item doto">
              <div>
                <strong>{doto.title}</strong>
                <small>{doto.date}</small>
              </div>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => onRemove(doto.id)}
              >
                &times;
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
}