export interface IFeaturedGame {
    id: number,
    name: string,
    discounted: boolean,
    discounted_percent: number,
    original_price: number,
    final_price: number,
    large_capsule_image: string,
    small_capsule_image: string,
    header_image: string,
}


const FeaturedGame = (props: IFeaturedGame) => {
    const { name, original_price, large_capsule_image } = props;
    return (
        <>
            <img src={large_capsule_image} alt={name} />
            <p>{name}</p>
            <p>{String(original_price).slice(0, -2).concat('.',String(original_price).slice(-2))}</p>
        </>
    )
}

export default FeaturedGame;