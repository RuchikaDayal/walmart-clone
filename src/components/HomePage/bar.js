import './bar.css'

const Bar =()=>{
    return (<>
        <div className='bar'>
            <div className='nav_box'>
                 <img  className='img' alt='img' src={'https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png'}/><p>How do you want your items?</p>
                <span className='hideplus'><img className='img' alt='img' src={'https://i5.walmartimages.com/dfw/4ff9c6c9-40c5/k2-_f5224bb5-3493-47da-a046-7f816ac1730e.v1.png'}/><p>Sacramento, 95829</p></span>
                <span className='hideplus'><img className='img' alt='img' src={'https://i5.walmartimages.com/dfw/4ff9c6c9-cc5a/k2-_cb966ffb-2cf6-4a8d-869c-27d99919cb16.v1.png'}/><p>Saacramento Supercenter</p></span>
            </div>
            <div className='links hide'>
                <li className='linkitem'> Deals</li>
                <li className='linkitem'>BlackHistoryMonth</li>
                <li className='linkitem'>Grocery&essentials</li>
                <li className='linkitem'> Home</li>
                <li className='linkitem'>Tech</li>
                <li className='linkitem'>Fasion</li>
                <li className='linkitem'>Auto</li>
                <li className='linkitem'>Walmart+</li>
            </div>
        </div>
    </>
    )

}
export default Bar