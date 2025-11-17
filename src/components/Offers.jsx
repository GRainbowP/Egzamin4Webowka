import './Offers.css'

function Offers({cars}) {

    return (
        <div className="text-start mt-2">
            <h3><b>Oferty samochodów</b></h3>
            {cars.map((car, id) => (
                <div key={id} className="card">
                    <img src={car.photo} className="img-fluid rounded-start card-image-top" width={400} height={200} />
                    <div className="card-body">
                        <div className="card-title"><b>{car.name} {car.year}</b></div>
                        <div className="card-text">{car.info}</div>
                        <div className="card-footer d-flex">
                            <p className="text-primary"><b>{car.price} zł</b></p>
                            <p className="seller-text text-muted">Wystawił: {car.seller}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Offers