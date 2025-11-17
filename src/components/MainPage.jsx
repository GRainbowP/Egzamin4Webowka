import { useState } from 'react'
import Offers from './Offers'
import AddOffer from './AddOffer'

function MainPage({cars, setCars}) {
    const [showOffers, setShowOffers] = useState(true)

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-lg">
                    <h2 className="d-flex"><b>Pseudotomoto</b></h2>
                </div>
                <div className="col-lg d-flex align-items-center m-2">
                    <p className="me-2">Zalogowany: <b>patryk</b></p>
                    <button className="btn btn-primary me-2" onClick={() => setShowOffers(false)}>Dodaj ogłoszenie</button>
                    <button className="btn btn-primary me-2">Wyloguj</button>
                </div>
            </div>
            {showOffers && 
                <Offers cars={cars} />
            }

            {!showOffers &&
                <AddOffer cars={cars} setCars={setCars} setShowOffers={setShowOffers} />
            }
        </div>
    )
}

export default MainPage