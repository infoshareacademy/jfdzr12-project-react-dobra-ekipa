const Price = ({header, value}) =>{
return (
    <>
    <div className="price">
    <div>{header}</div>
    <div className="priceItem">{value}</div>
    <ul>
        <li>already taken</li>
        <li>no modifications</li>
        <li>single use</li>
    </ul>
    </div>
    </>
)
}

export default Price;