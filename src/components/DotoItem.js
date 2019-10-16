import React from 'react';
import PropTypes from 'prop-types';
import { log } from 'util';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function DotoItem({doto, index, onChange}) {
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input} onChange={() => onChange(doto.id)} />
                <strong> { index + 1 } </strong>
                &nbsp;
                { doto.title }
            </span>
            <button className="rm" >&times;</button>
        </li>
    )
}

DotoItem.propTypes = {
    doto: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default DotoItem;