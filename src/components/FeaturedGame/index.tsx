import './featuredgame.sass';

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
    const { name, original_price, final_price, large_capsule_image } = props;
    return (
        <>
            <a className="featured_game">
                <div className="featured_game_image">
                    <div style={{backgroundImage: `url(${large_capsule_image})`}} />
                </div>
                <div className="info">
                    <div className="info-name">{name}</div>
                    <div className="info-price">{String(final_price).slice(0, -2).concat('.', String(final_price).slice(-2))}</div>
                </div>
            </a>
        </>
    )
}

export default FeaturedGame;