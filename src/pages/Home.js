import React, {Fragment, useContext, useEffect} from 'react'
import { Form } from '../components/Form'
import { Dotos } from '../components/Dotos'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { Loader } from '../components/Loader'

export const Home = () => {
    const {loading, dotos, fetchDotos, removeDoto} = useContext(FirebaseContext)

    useEffect(() => {
        fetchDotos()
        // eslint-disable-next-line
    }, [])

    return (
      <Fragment>
        <Form />

        <hr />

        {loading ? <Loader /> : <Dotos dotos={dotos} onRemove={removeDoto} />}
      </Fragment>
    );
}