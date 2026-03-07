import HomeBannerApi from '../api/home_banner_api.js';

/** Root Router Controller */
const getRootRouter = (req, res) => {

    res.status(200).json({ message: 'Server is running successfully...' });

}

/** GET Home Banner API */
const getHomeBannerApi = (req, res) => {

    res.status(200).json(HomeBannerApi);

}

export default {

    getRootRouter,
    getHomeBannerApi

}