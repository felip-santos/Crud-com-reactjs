import React from 'react'
import '../card/card.css'
import CloseIcon from '@material-ui/icons/Close'
import darkSouls from '../../assets/darkSouls-3.jpg'

const texto = `Lorem ipsum urna tincidunt porttitor convallis porta eros ut blandit, aenean gravida et litora scelerisque pharetra rutrum magna condimentum, fames tortor sollicitudin ullamcorper sodales a suspendisse lacinia. pulvinar sagittis pellentesque mauris conubia pulvinar risus nisl, conubia feugiat maecenas aliquam porttitor cras, praesent nam purus gravida pellentesque massa. nisl aenean molestie sodales interdum quam senectus hac suspendisse phasellus imperdiet augue mauris id, conubia phasellus quisque ultrices etiam potenti curabitur lobortis leo nunc condimentum pharetra. sit tellus sapien tristique vestibulum mollis nibh pharetra, imperdiet orci habitasse urna dictum cras, accumsan aliquam posuere erat pharetra egestas. 
    
    Suspendisse eleifend himenaeos iaculis posuere morbi iaculis felis fames ligula, class lobortis quis pulvinar diam feugiat convallis tellus odio, ligula convallis dictum pretium vivamus inceptos hendrerit elit. diam dictum dictumst hac consectetur pulvinar taciti enim lacus imperdiet est metus, conubia habitasse et interdum varius suscipit rutrum faucibus erat. cursus elementum aenean phasellus nisi fusce auctor, pretium congue eros ut ullamcorper nostra, felis blandit tortor platea ante. posuere curae cras praesent ultrices nibh nam tempus enim tortor augue aliquam, vehicula orci fames orci tellus consequat est dictumst elit sagittis cubilia, eleifend etiam himenaeos sed vitae odio ornare primis feugiat etiam.`

export default function Card(visible, toggleCardGamerVisibility){

    return(
        <div className={visible ? "container-card cardGamerVisible" : "cardGamerHidden"}>

            <div className="card">

                <span className="close-icon" onClick={() => toggleCardGamerVisibility()}><CloseIcon /></span>

                <div className="content-card">

                    <div className="container-img">
                        <img src={darkSouls}></img>
                    </div>

                    <div className="container-info">

                        <h3>Dark Souls 3</h3>

                        <p>{texto}</p>

                    </div>

                    <div className="container-buttons">

                        <button className="btns">Modify</button>
                        <button className="btns">Delete</button>

                    </div>

                </div>

            </div>

        </div>
    );

}
