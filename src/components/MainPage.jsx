

function MainPage({cars}) {

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-lg">
                    <h2 className="d-flex"><b>Pseudotomoto</b></h2>
                </div>
                <div className="col-lg d-flex align-items-center m-2">
                    <p className="me-2">Zalogowany: <b>patryk</b></p>
                    <button className="btn btn-primary me-2">Dodaj ogłoszenie</button>
                    <button className="btn btn-primary me-2">Wyloguj</button>
                </div>
            </div>
            <div className="text-start mt-2">
                <h3><b>Oferty samochodów</b></h3>
                {cars.map((car) => (
                    <div key={car.id} className="card">
                        <img src={car.photo} className="img-fluid rounded-start card-image-top" width={400} height={200} />
                        <div className="card-body">
                            <div className="card-title"><b>{car.name}</b></div>
                            <div className="card-text">{car.info}</div>
                            <div className="card-footer d-flex">
                                <p className="text-primary"><b>{car.price} zł</b></p>
                                <p className="text-muted float-end">Wystawił: {car.seller}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainPage