import {
    LoadingContainer,
    LoadingBanner,
    LoadingApp,
    LoadingHeader,
} from './style';

import Logo from '../../common/image/TitleBar_logo.png';
import { GNBMainComponent } from '../../shared';
import AppImg1 from '../../common/image/loadingAppImg1.png';
import AppImg2 from '../../common/image/loadingAppImg2.png';

const Loading = () => {

    return(
        <LoadingContainer>
            <LoadingHeader>
                <img src={Logo} alt="loadingLogo" />
            </LoadingHeader>
            <LoadingApp>
                <LoadingBanner />
                <img src={AppImg1} alt="loadingImg1" />
                <img src={AppImg2} alt="loadingImg2" />
            </LoadingApp>
            <GNBMainComponent />
        </LoadingContainer>
    )

}

export default Loading;