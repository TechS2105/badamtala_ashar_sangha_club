import HomeBannerApi from '../api/home_banner_api.js';
import MarqueeeTextApi from '../api/marquee_text_api.js';
import HomeAboutCardApi from '../api/home_about_highlight_card_api.js';
import HomeAboutContentApi from '../api/home_about_content_api.js';
import HomePujaHighlightCounterApi from '../api/puja_highlight_counter_api.js'

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

/** GET Home About Section Card API */
const getHomeAboutCardApi = (req, res) => {

    res.status(200).json(HomeAboutCardApi);

}

/** GET Home About Section Content API */
const getHomeAboutContentApi = (req, res) => {

    res.status(200).json(HomeAboutContentApi);

}

/** GET Home Puja Highlight Counter API  */
const getHomePujaHighlightCounterApi = (req, res) => {

    res.status(200).json(HomePujaHighlightCounterApi);

}

export default {

    getRootRouter,
    getHomeBannerApi,
    getMarqueeTextApi,
    getHomeAboutCardApi,
    getHomeAboutContentApi,
    getHomePujaHighlightCounterApi

}