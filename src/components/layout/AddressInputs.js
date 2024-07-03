

export default function AddressInputs({addressProps, setAddressProps, disabled=false}) {

    const {phone, streetAddress, postalCode, city, country} = addressProps;
    return (
        <>
            <label>Phone Number</label>
            <input
                disabled={disabled}
                type="tel"
                placeholder="Phone Number"
                value={phone || ''}
                onChange={(e) => setAddressProps("phone", e.target.value)}
            />
            <label>Street Address</label>
            <input
                disabled={disabled}
                type="text"
                placeholder="Street Address"
                value={streetAddress || ''}
                onChange={(e) => setAddressProps("streetAddress", e.target.value)}
            />
            <div className="grid grid-cols-2 gap-2">
                <div>
                <label>Postal Code</label>
                <input
                    disabled={disabled}
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode || ''}
                    onChange={(e) => setAddressProps("postalCode", e.target.value)}
                />
                </div>
                <div>
                <label>City</label>
                <input
                    disabled={disabled}
                    className="my-0"
                    type="text"
                    placeholder="City"
                    value={city || ''}
                    onChange={(e) => setAddressProps("city", e.target.value)}
                />
                </div>
            </div>
            <label>Country</label>
            <input
                disabled={disabled}
                type="text"
                placeholder="Country"
                value={country || ''}
                onChange={(e) => setAddressProps("country", e.target.value)}
            />
        </>
    )
}