interface PriceProps {
    header: string;
    value: string;
}

const Price = ({header, value}: PriceProps) => {
return (
    <>
        <div className = "price"></div>
        <div> {header}</div>
        <div className = "priceItem"> {value} </div>
            <ul>
                <li>already taken</li>
                <li>no modifications</li>
                <li>single use</li>
            </ul>
    </>
);
}

export default Price;