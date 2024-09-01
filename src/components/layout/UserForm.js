'use client'
import EditableImage from "@/components/layout/EditableImage";
import { useState } from "react";
import { useProfile } from "../UseProfile";
import AddressInputs from "./AddressInputs";

export default function UserForm({user, onSave}) {

    const [userName, setUserName] = useState(user?.name || "");
    const [image, setImage] = useState(user?.image || "");
    const [phone, setPhone] = useState(user?.phone || "");
    const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
    const [postalCode, setPostalCode] = useState(user?.postalCode || "");
    const [city, setCity] = useState(user?.city || "");
    const [country, setCountry] = useState(user?.country || "");
    const [admin, setAdmin] = useState(user?.admin || false);
    const {data: loggedInUserData} = useProfile();

    function handleAddressChange(propName, value) {
        if (propName === "phone") setPhone(value);
        if (propName === "streetAddress") setStreetAddress(value);
        if (propName === "postalCode") setPostalCode(value);
        if (propName === "city") setCity(value);
        if (propName === "country") setCountry(value);
    }

    return (
        <div className="md:flex gap-4">
            <div>
            <div className="p-2 rounded-lg relative max-w-[120px]">
                <EditableImage link={image} setLink={setImage} />
            </div>
            </div>
            <form className="grow" 
                onSubmit={ e =>
                    onSave(e, {name:userName,image,phone,admin,
                        streetAddress,postalCode,city,country})
                }
            >
            <label>First and Last Name</label>
            <input
                type="text"
                placeholder="First and Last Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <label>Email</label>
            <input
                type="text"
                disabled={true}
                value={user.email}
                placeholder={'Email'}
            />
            <AddressInputs 
                addressProps={{streetAddress, city, country, phone, postalCode}}
                setAddressProps={handleAddressChange}
            />
            {loggedInUserData.admin &&  (
                <div>
                    {/* {JSON.stringify(admin)} */}
                    <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="adminCb">
                        <input 
                            id="adminCb" 
                            type="checkbox"
                            value={'1'}
                            checked={admin}
                            onChange={e => setAdmin(e.target.checked)}
                        />
                        <span>Admin</span>
                    </label>
                </div>
            )}
            
            <button type="submit">Save</button>
            </form>
        </div>
    )
}