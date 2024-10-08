"use client";
import EditableImage from "@/components/layout/EditableImage";
import { useEffect, useState } from "react";
import MenuItemPriceProps from '@/components/layout/MenuItemPriceProps';

const MenuItemForm = ({ onSubmit, menuItem}) => {

    const [image, setImage] = useState(menuItem?.image || '');
    const [name, setName] = useState(menuItem?.name || '');
    const [description, setDescription] = useState(menuItem?.description || '');
    const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
    const [sizes, setSizes] = useState(menuItem?.sizes || []);
    const [extraIngredientPrices, setExtraIngredientPrices] = useState(menuItem?.extraIngredientPrices || []);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(menuItem?.category || '');

    useEffect(() => {
        fetch('/api/categories')
        .then(res => {
            res.json()
            .then(categories => {
                setCategories(categories)
            })
        })
    }, [])

    return (
        <form 
            onSubmit={e => 
                onSubmit(e, 
                    {image, name, description, basePrice, sizes, extraIngredientPrices, category}
                )} 
            className="mt-8 max-w-2xl mx-auto">
            <div
            className="md:grid items-start gap-4"
            style={{ gridTemplateColumns: ".3fr .7fr" }}
            >
            <div>
                <EditableImage link={image} setLink={setImage} />
            </div>
            <div className="grow">
                <label>Item name</label>
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Description</label>
                <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <label>Category</label>
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    {categories?.length > 0 && categories.map((c) => (
                        <option value={c._id} key={c._id}>{c.name}</option>
                    ))}
                </select>
                <label>Base price</label>
                <input
                    type="text"
                    value={basePrice}
                    onChange={(e) => setBasePrice(e.target.value)}
                />
                <MenuItemPriceProps 
                    name={"Sizes"} 
                    props={sizes}
                    addLabel={'Add item size'}
                    setProps={setSizes}/>
                <MenuItemPriceProps 
                    name={"Extra Ingredients"} 
                    props={extraIngredientPrices}
                    addLabel={'Add Ingredient Prices'}
                    setProps={setExtraIngredientPrices}/>
                <button type="submit">Save</button>
            </div>
            </div>
        </form>
    )
}

export default MenuItemForm;