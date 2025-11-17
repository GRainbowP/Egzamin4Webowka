import { useRef } from "react"


function AddOffer({cars, setCars, setShowOffers}) {
    const nameRef = useRef(null);
    const yearRef = useRef(null);
    const priceRef = useRef(null);
    const imgRef = useRef(null);

    function addOffer() {
        setCars([...cars, {
            photo: imgRef.current.value,
            name: nameRef.current.value,
            year: yearRef.current.value,
            info: "",
            price: priceRef.current.value,
            seller: "patryk"
        }])
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="carName" className="form-label">Nazwa auta</label>
                <input ref={nameRef} type="text" className="form-control" id="carName" />
            </div>
            <div className="mb-3">
                <label htmlFor="productionYear" className="form-label">Rok produkcji</label>
                <input ref={yearRef} type="number" className="form-control" id="productionYear" />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="carPrice">Cena</label>
                <input ref={priceRef} type="number" className="form-control" id="productionYear" />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="imageURL">URL zdjęcia</label>
                <input ref={imgRef} type="url" className="form-control" id="imageURL" />
            </div>
            <button className="btn btn-primary" onClick={() => {addOffer(), setShowOffers(true)}}>Dodaj</button>
        </div>
    )
}

export default AddOffer