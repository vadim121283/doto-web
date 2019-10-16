import React from 'react';
import DotoItem from './DotoItem';
import PropTypes from 'prop-types';

const styles = {
    ul: {
        listStyle: 'none'
    }
}

function DotoList(props) {
    return (
        <ul style={styles.ul}>
            { props.dotos.map((doto, index) => {
                return <DotoItem doto={doto} key={doto.id} index={index} onChange={props.onToggle} />
            })}
        </ul>
    )
}

DotoList.propTypes = {
    dotos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default DotoList;