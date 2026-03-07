import HomeBannerApi from '../api/home_banner_api.js';
import MarqueeeTextApi from '../api/marquee_text_api.js';

/** Root Router Controller */
const getRootRouter = (req, res) => {

    res.status(200).json({ message: 'Server is running successfully...' });

}

/** GET Home Banner API */
const getHomeBannerApi = (req, res) => {

    res.status(200).json(HomeBannerApi);

}

/** GET Marquee Text API */
const getMarqueeTextApi = (req, res) => {

    res.status(200).json(MarqueeeTextApi);

}

export default {

    getRootRouter,
    getHomeBannerApi,
    getMarqueeTextApi

}