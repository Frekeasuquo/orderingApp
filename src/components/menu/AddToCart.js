

export default function AddToCartButton ({ hasSizesOrExtras, onClick, basePrice, image }) {
    if (hasSizesOrExtras) {
        return (
            <div className='flying-button-parent mt-4'>
                {/* <FlyingButton 
                    src={image}
                    targetTop={'5%'}
                    targetLeft={'90%'}
                > */}
                <button onClick={onClick}>
                    Add to cart ${basePrice}
                </button>
                {/* </FlyingButton> */}
            </div>
            
        )
    }

    return (
        <button 
            type='button'
            onClick={onClick}
            className="bg-primary text-white rounded-full mt-4 px-8 py-2">
                <span>Add to cart(From ${basePrice})</span>
                
        </button>
    )
}