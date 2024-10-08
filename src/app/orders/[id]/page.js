"use client"
import { CartContext, cartProductPrice } from "@/components/AppContext"
import AddressInputs from "@/components/layout/AddressInputs";
import SectionHeader from "@/components/layout/sectionHeaders"
import CartProduct from "@/components/menu/CartProduct";
import { useParams } from "next/navigation";
import { useEffect, useContext, useState } from "react"


export default function OrderPage() {
    const {clearCart} = useContext(CartContext);
    const [loadingOrders, setLoadingOrders] = useState(true)
    const {id} = useParams()
    const [order, setOrder] = useState()

    useEffect(() => {
        if (typeof window.console !== "undefined") {
            if (window.location.href.includes('clear-cart=1')) {
                clearCart();
            }
        }

        if (id) {
            setLoadingOrders(true)
            fetch('/api/orders?_id='+id).then(res => {
                res.json().then(orderData => {
                    setOrder(orderData)
                    setLoadingOrders(false)
                })
            })
        }
    }, [])

    let subtotal = 0;
    if (order?.cartProducts) {
        for (const product of order?.cartProducts) {
        subtotal += cartProductPrice(product);
        }
    }

    return (
        <section className="max-w-2xl mx-auto text-center mt-8">
            <div>
                <SectionHeader mainHeader="Your order"/>
                <div className="mt-4 mb-8">
                    <p>Thanks for your order.</p>
                    <p>We will notify you once your order is ready.</p>
                </div>
            </div>
            {loadingOrders && (
                <div>Loading orders...</div>
            )}
            {order && (
                <div className="grid md:grid-cols-2 md:gap-16">
                    <div>
                        {order.cartProducts.map((product) => (
                            <CartProduct key={product._id} product={product} />
                        ))}
                        <div className="text-right py-2 text-gray-500">
                            Subtotal:
                            <span className="text-black font-bold inline-block w-8">${subtotal}</span>
                            <br />
                            Delivery:
                            <span className="text-black font-bold inline-block w-8">$5</span>
                            <br />
                            Total:
                            <span className="text-black font-bold inline-block w-8">
                                ${subtotal + 5}
                            </span>
                            </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                            <AddressInputs disabled={true} addressProps={order} />
                    </div>
                </div>
            )}
        </section>
    )
}