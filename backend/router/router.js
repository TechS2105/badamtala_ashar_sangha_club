import express from 'express';
import getRouterController from '../controllers/getRouterController.js';

const router = express.Router();

router.get('/', getRouterController.getRootRouter); // Root Router
router.get('/api/home/banner', getRouterController.getHomeBannerApi); // Home Banner API Router
router.get('/api/marquee', getRouterController.getMarqueeTextApi); // Marquee Text API
router.get('/api/home/about/card', getRouterController.getHomeAboutCardApi); // Home About Card API Router
router.get('/api/home/about/content', getRouterController.getHomeAboutContentApi); // Home About Content API Router
router.get('/api/home/puja/highlight/counter', getRouterController.getHomePujaHighlightCounterApi); // Home Puja Highlight Counter API Router

export default router;